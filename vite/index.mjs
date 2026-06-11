import { readFile } from 'node:fs/promises'

const PACKAGE = '@whitewall/blip-ds'

const BLIP_PATH_RE = /[\\/]blip-ds[\\/]/

const BUCKET_RE =
  /[\\/]blip-ds[\\/].*[\\/](assets_icons_(?:non_)?flag_(?:outline|solid)|assets_emojis|assets_logos|assets_illustrations_[a-z-]+)(?:-[\w-]+)?\.js$/

const OBJECT_RE = /=\s*(\{[\s\S]*\})\s*;\s*export\b/

const ENTRY_TAG_RE = /[\\/]blip-ds[\\/].*[\\/]bds-([a-z0-9-]+)\.entry\.js$/

const KEY_PREFIX_RE = /^asset-(?:icon|emoji|logo)-/
const ICON_THEME_SUFFIX_RE = /-(?:outline|solid)$/
// Illustration keys are `asset-{type}-{name}-svg`; the markup references `{name}`.
// Types can contain dashes, so they must be enumerated to split type from name —
// keep in sync with `IllustrationType` in src/components/illustration.
const ILLUSTRATION_KEY_RE =
  /^asset-(?:default|screens|blip-solid|blip-outline|logo-integration|empty-states|brand|segmented|smartphone|spots)-(.+)-svg$/

const TOKEN_RE = /['"`]([a-z0-9][a-z0-9-]{0,48})['"`]/g
const TAG_RE = /bds-[a-z0-9-]+/g
// A rendered element, as either `<bds-icon>` markup or `<BdsIcon>` React-wrapper JSX.
const MARKUP_TAG_RE = /<(bds-[a-z0-9-]+|Bds[A-Z][A-Za-z0-9]*)/g
const SOURCE_RE = /\.(svelte|vue|astro|html|tsx?|jsx?|mjs)$/

const isBlipModule = (id) => BLIP_PATH_RE.test(id)

// `bds-icon` → `bds-icon` (idempotent), `BdsInputPhoneNumber` → `bds-input-phone-number`.
const pascalToTag = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const assetKeyToName = (key) => {
  const illustration = key.match(ILLUSTRATION_KEY_RE)
  if (illustration) return illustration[1]
  const withoutPrefix = key.replace(KEY_PREFIX_RE, '')
  return key.startsWith('asset-icon-') ? withoutPrefix.replace(ICON_THEME_SUFFIX_RE, '') : withoutPrefix
}

const collectMatches = (text, regex, into, group = 0) => {
  for (const match of text.matchAll(regex)) into.add(match[group])
}

const collectRenderedTags = (text, into) => {
  for (const match of text.matchAll(MARKUP_TAG_RE)) into.add(pascalToTag(match[1]))
}

// Illustration names are too generic for token matching ('cookie', 'avatar', ...), so
// their keys come from the rendered markup instead: every static `type`/`name` pair
// becomes an exact key, and any dynamic usage falls back to broad name matching.
const ILLUSTRATION_MARKUP_RE = /<(?:bds-illustration|BdsIllustration)\b[^>]*/g
// The lookbehind rejects bound attributes (`:type="expr"` in Vue, `[type]="expr"` in
// Angular), which would otherwise read the expression as a static value.
const ATTR_VALUE_RE = (attr) => new RegExp(`(?<![:[\\w-])${attr}\\s*=\\s*"([^"{]*)"`)

const collectIllustrationUsage = (text, usage) => {
  for (const [markup] of text.matchAll(ILLUSTRATION_MARKUP_RE)) {
    const type = markup.match(ATTR_VALUE_RE('type'))?.[1] ?? 'default'
    const name = markup.match(ATTR_VALUE_RE('name'))?.[1]
    if (name && !markup.includes('{')) usage.keys.add(`asset-${type}-${name}-svg`)
    else usage.dynamic = true
  }
}

/**
 * Tree-shakes the `@whitewall/blip-ds` icon/emoji/logo asset buckets down to the
 * assets actually reachable in the consuming app.
 *
 * Each bucket ships every asset of its category as a single lazy chunk (~1MB of
 * country flags, ~50KB of emojis, ...), so rendering one icon pulls the whole set,
 * and the build artifact carries every category whether used or not.
 *
 * Reachability is read from the bundler's module graph, which has already
 * tree-shaken unused components. The blip-ds loader lazily `import()`s every
 * component, so the chunk graph alone makes everything look reachable — we instead
 * walk only what the app actually renders:
 *   1. seed the icon/emoji/logo names found in the app's own chunks, plus the
 *      `bds-*` tags it renders in source (both `<bds-icon>` markup and `<BdsIcon>`
 *      React-wrapper JSX);
 *   2. from each rendered component's entry module, follow its static imports (its
 *      inline data — e.g. the country/flag list lives inside the phone-number entry)
 *      and the child component tags it renders — never the loader's lazy imports;
 *   3. rewrite each asset bucket chunk, keeping only the names reached this way.
 *
 * So the flag set survives only when a flag-rendering component is actually used,
 * the emoji set only when an emoji component is used, and so on. Names built by
 * string concatenation can't be detected statically — list those in `safelist`.
 *
 * @param {{ safelist?: string[] }} [options]
 * @returns {import('vite').Plugin}
 */
export function blipDsAssetPurge(options = {}) {
  const safelist = options.safelist ?? []
  const buckets = new Map()

  return {
    name: 'blip-ds-asset-purge',
    apply: 'build',
    transform(code, id) {
      if (!BUCKET_RE.test(id)) return null

      const match = code.match(OBJECT_RE)
      if (match) {
        try {
          buckets.set(id, JSON.parse(match[1]))
          return null
        } catch {
          // fall through to the warning below
        }
      }

      this.warn(`${PACKAGE} asset-purge: could not parse asset bucket "${id}", left untouched`)
      return null
    },
    async generateBundle(_options, bundle) {
      const chunks = Object.values(bundle).filter((output) => output.type === 'chunk')
      if (!chunks.some((chunk) => chunk.moduleIds.some((id) => buckets.has(id)))) return

      const tagToEntryModule = new Map()
      for (const id of this.getModuleIds()) {
        const entry = id.match(ENTRY_TAG_RE)
        if (entry) tagToEntryModule.set(`bds-${entry[1]}`, id)
      }

      const moduleCache = new Map()
      const readModule = async (id) => {
        let source = moduleCache.get(id)
        if (source === undefined) {
          source = await readFile(id, 'utf8').catch(() => '')
          moduleCache.set(id, source)
        }
        return source
      }

      const usedNames = new Set(safelist)
      const sourceModules = new Set()
      for (const chunk of chunks) {
        // In chunks that mix app and blip-ds code (e.g. the hydrate script inlined into
        // hooks.server.js) tokens are collected per rendered module, so blip-ds code
        // doesn't feed its own asset names back into the match set. When the bundler
        // doesn't expose a rendered app module's code, the whole chunk is matched again
        // rather than risking dropping assets the app actually uses.
        if (!chunk.moduleIds.some(isBlipModule)) {
          collectMatches(chunk.code, TOKEN_RE, usedNames, 1)
        } else {
          let appCodeMissing = false
          for (const [id, rendered] of Object.entries(chunk.modules)) {
            if (isBlipModule(id)) continue
            if (rendered.code) collectMatches(rendered.code, TOKEN_RE, usedNames, 1)
            else appCodeMissing = true
          }
          if (appCodeMissing) collectMatches(chunk.code, TOKEN_RE, usedNames, 1)
        }
        for (const id of chunk.moduleIds) {
          // tree-shaken modules (renderedLength 0) are in the graph but ship no code,
          // so what they render must not keep assets alive
          const rendered = (chunk.modules[id]?.renderedLength ?? 1) > 0
          if (rendered && !isBlipModule(id) && !id.includes('\0') && SOURCE_RE.test(id)) sourceModules.add(id)
        }
      }

      const seedTags = new Set()
      const illustrationUsage = { keys: new Set(), dynamic: false }
      await Promise.all(
        [...sourceModules].map(async (id) => {
          const source = await readModule(id)
          collectRenderedTags(source, seedTags)
          collectIllustrationUsage(source, illustrationUsage)
        }),
      )

      const visited = new Set()
      const queue = [...seedTags].map((tag) => tagToEntryModule.get(tag)).filter((id) => id !== undefined)
      while (queue.length > 0) {
        const id = queue.pop()
        if (visited.has(id) || !isBlipModule(id)) continue
        visited.add(id)

        const source = await readModule(id)
        collectMatches(source, TOKEN_RE, usedNames, 1)

        if (ENTRY_TAG_RE.test(id)) {
          const childTags = new Set()
          collectMatches(source, TAG_RE, childTags)
          for (const tag of childTags) {
            const child = tagToEntryModule.get(tag)
            if (child && !visited.has(child)) queue.push(child)
          }
        }

        const info = this.getModuleInfo(id)
        for (const imported of info?.importedIds ?? []) {
          if (isBlipModule(imported) && !visited.has(imported)) queue.push(imported)
        }
      }

      for (const chunk of chunks) {
        if (!chunk.moduleIds.some((id) => buckets.has(id))) continue

        // Buckets are lazy-imported, so each is normally its own chunk; if the bundler
        // merged one with other code, rewriting the whole chunk would drop that code.
        if (chunk.moduleIds.length !== 1) {
          this.warn(`${PACKAGE} asset-purge: bucket chunk "${chunk.fileName}" is not isolated, left untouched`)
          continue
        }

        const bucketId = chunk.moduleIds[0]
        const isIllustrationBucket = /assets_illustrations_/.test(bucketId)
        const assets = buckets.get(bucketId)
        const kept = {}
        for (const [key, value] of Object.entries(assets)) {
          const keep = isIllustrationBucket
            ? illustrationUsage.keys.has(key) ||
              safelist.includes(assetKeyToName(key)) ||
              (illustrationUsage.dynamic && usedNames.has(assetKeyToName(key)))
            : usedNames.has(assetKeyToName(key))
          if (keep) kept[key] = value
        }

        chunk.code = `export default ${JSON.stringify(kept)}`
        chunk.map = null

        const label = bucketId.slice(bucketId.indexOf('assets_'))
        this.info(`${PACKAGE} asset-purge: ${label} ${Object.keys(assets).length} → ${Object.keys(kept).length} assets`)
      }
    },
  }
}
