import { readFile } from 'node:fs/promises'

const PACKAGE = '@whitewall/blip-ds'

const BLIP_PATH_RE = /[\\/]blip-ds[\\/]/

const BUCKET_RE =
  /[\\/]blip-ds[\\/].*[\\/](assets_icons_(?:non_)?flag_(?:outline|solid)|assets_emojis|assets_logos)(?:-[\w-]+)?\.js$/

const OBJECT_RE = /=\s*(\{[\s\S]*\})\s*;\s*export\b/

const ENTRY_TAG_RE = /[\\/]blip-ds[\\/].*[\\/]bds-([a-z0-9-]+)\.entry\.js$/

const KEY_PREFIX_RE = /^asset-(?:icon|emoji|logo)-/
const ICON_THEME_SUFFIX_RE = /-(?:outline|solid)$/

const TOKEN_RE = /['"`]([a-z0-9][a-z0-9-]{0,48})['"`]/g
const TAG_RE = /bds-[a-z0-9-]+/g
// A rendered element, as either `<bds-icon>` markup or `<BdsIcon>` React-wrapper JSX.
const MARKUP_TAG_RE = /<(bds-[a-z0-9-]+|Bds[A-Z][A-Za-z0-9]*)/g
const SOURCE_RE = /\.(svelte|vue|astro|html|tsx?|jsx?|mjs)$/

const isBlipModule = (id) => BLIP_PATH_RE.test(id)

// `bds-icon` → `bds-icon` (idempotent), `BdsInputPhoneNumber` → `bds-input-phone-number`.
const pascalToTag = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const assetKeyToName = (key) => {
  const withoutPrefix = key.replace(KEY_PREFIX_RE, '')
  return key.startsWith('asset-icon-') ? withoutPrefix.replace(ICON_THEME_SUFFIX_RE, '') : withoutPrefix
}

const collectMatches = (text, regex, into, group = 0) => {
  for (const match of text.matchAll(regex)) into.add(match[group])
}

const collectRenderedTags = (text, into) => {
  for (const match of text.matchAll(MARKUP_TAG_RE)) into.add(pascalToTag(match[1]))
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
        const isBlipChunk = chunk.moduleIds.length > 0 && chunk.moduleIds.every(isBlipModule)
        if (!isBlipChunk) collectMatches(chunk.code, TOKEN_RE, usedNames, 1)
        for (const id of chunk.moduleIds) {
          if (!isBlipModule(id) && !id.includes('\0') && SOURCE_RE.test(id)) sourceModules.add(id)
        }
      }

      const seedTags = new Set()
      await Promise.all([...sourceModules].map(async (id) => collectRenderedTags(await readModule(id), seedTags)))

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
        const assets = buckets.get(bucketId)
        const kept = {}
        for (const [key, value] of Object.entries(assets)) {
          if (usedNames.has(assetKeyToName(key))) kept[key] = value
        }

        chunk.code = `export default ${JSON.stringify(kept)}`
        chunk.map = null

        const label = bucketId.slice(bucketId.indexOf('assets_'))
        this.info(`${PACKAGE} asset-purge: ${label} ${Object.keys(assets).length} → ${Object.keys(kept).length} assets`)
      }
    },
  }
}
