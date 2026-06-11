import { renderToString } from '../hydrate/index.mjs'

// Scoped (non-shadow) components restructure their light DOM when server-rendered,
// which breaks the hydration walk of frameworks that own that DOM (Svelte, React, ...).
// They always stay client-rendered.
const SCOPED_COMPONENTS = [
  'bds-toast-container',
  'bds-radio-group',
  'bds-table',
  'bds-table-header',
  'bds-table-body',
  'bds-table-cell',
  'bds-table-th',
  'bds-table-row',
  'bds-list-item-content',
]

// renderToString never changes document-level styles but still pays to parse and
// re-serialize them, so they sit behind placeholders during the transform.
const STYLE_RE = /<style[^>]*>[\s\S]*?<\/style>/g
const STASHED_STYLE_RE = /<style data-stashed="(\d+)"><\/style>/g

const stashStyles = (html) => {
  const styles = []
  const stripped = html.replace(STYLE_RE, (style) => {
    styles.push(style)
    return `<style data-stashed="${styles.length - 1}"></style>`
  })
  return { stripped, styles }
}

const restoreStyles = (html, styles) => html.replace(STASHED_STYLE_RE, (_, index) => styles[Number(index)])

// Stencil leaves one content-ref comment (<!--r.N-->) per component in the light DOM.
// Framework hydration walks break on unexpected nodes, and shadow components use native
// slots so the client runtime doesn't need these markers outside the shadow templates.
const TEMPLATE_BOUNDARY_RE = /(<template shadowrootmode="open">|<\/template>)/
const CONTENT_REF_RE = /<!--r\.\d+-->/g

const stripLightDomContentRefs = (html) => {
  const parts = html.split(TEMPLATE_BOUNDARY_RE)
  let depth = 0
  return parts
    .map((part) => {
      if (part === '<template shadowrootmode="open">') {
        depth++
        return part
      }
      if (part === '</template>') {
        depth--
        return part
      }
      return depth === 0 ? part.replaceAll(CONTENT_REF_RE, '') : part
    })
    .join('')
}

/**
 * Creates a function that server-renders the blip-ds components of a full HTML
 * document into declarative shadow DOM, so they paint before any JavaScript runs.
 * See the type declarations for options and caveats.
 */
// Web Crypto instead of node:crypto so the module also runs on edge runtimes.
const hashContent = async (content) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(content))
  return String.fromCharCode(...new Uint8Array(digest))
}

export function createSsrRenderer(options = {}) {
  const { cacheMaxLength = 0, excludeComponents = [], disabled = false } = options

  if (disabled) {
    return async (html) => html
  }

  const renderOptions = {
    serializeShadowRoot: 'declarative-shadow-dom',
    fullDocument: true,
    prettyHtml: false,
    excludeComponents: [...SCOPED_COMPONENTS, ...excludeComponents],
  }

  // The same input always produces equivalent output, so the transform can be
  // memoized on the content hash: entries can never go stale. LRU bounded by stored
  // characters (strings are UTF-16, so heap usage is ~2x cacheMaxLength).
  const cache = new Map()
  let cacheLength = 0

  return async function renderBlipDs(html) {
    const key = cacheMaxLength > 0 ? await hashContent(html) : null

    if (key !== null) {
      const cached = cache.get(key)
      if (cached !== undefined) {
        cache.delete(key)
        cache.set(key, cached)
        return cached
      }
    }

    const { stripped, styles } = stashStyles(html)
    const hydrated = await renderToString(stripped, renderOptions)
    const result = restoreStyles(stripLightDomContentRefs(hydrated.html ?? stripped), styles)

    if (key !== null) {
      cacheLength += result.length
      while (cacheLength > cacheMaxLength && cache.size > 0) {
        const oldest = cache.keys().next().value
        cacheLength -= cache.get(oldest)?.length ?? 0
        cache.delete(oldest)
      }
      cache.set(key, result)
    }

    return result
  }
}

/**
 * Wraps `createSsrRenderer` in a server hook compatible with SvelteKit's `Handle`
 * contract, transforming every HTML response. See the type declarations.
 */
export function createSsrHandle(options = {}) {
  const render = createSsrRenderer(options)

  return async ({ event, resolve }) => {
    const response = await resolve(event)

    if (!response.headers.get('content-type')?.includes('text/html')) {
      return response
    }

    const headers = new Headers(response.headers)
    headers.delete('content-length')
    return new Response(await render(await response.text()), {
      status: response.status,
      headers,
    })
  }
}
