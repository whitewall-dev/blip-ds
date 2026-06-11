export interface SsrRendererOptions {
  /**
   * Memoizes the whole transform keyed by a hash of the input HTML, bounded by the
   * total characters stored (strings are UTF-16, so heap usage is ~2x this). Only
   * enable for responses that repeat between requests on a long-lived server —
   * personalized pages produce a different hash every time, and serverless platforms
   * with per-request isolates never see a repeat. Defaults to 0 (off).
   */
  cacheMaxLength?: number
  /**
   * Extra components to leave client-rendered, on top of the scoped (non-shadow)
   * components that the renderer always excludes.
   */
  excludeComponents?: string[]
  /**
   * Returns the input untouched. Useful as an environment-driven kill switch.
   */
  disabled?: boolean
}

/**
 * Creates a function that server-renders the blip-ds components of a full HTML
 * document into declarative shadow DOM, so they paint before any JavaScript runs.
 * On the client, the components adopt the server-rendered content instead of
 * fetching their assets again.
 *
 * The input must be valid HTML: invalid nesting (e.g. an `<a>` inside another `<a>`)
 * is normalized by the underlying parser, which breaks the markup the consuming
 * framework expects to hydrate.
 */
export function createSsrRenderer(options?: SsrRendererOptions): (html: string) => Promise<string>

interface SsrHandleInput<Event> {
  event: Event
  resolve: (event: Event) => Response | Promise<Response>
}

/**
 * Wraps `createSsrRenderer` in a server hook that transforms every HTML response.
 * The signature is structurally compatible with SvelteKit's `Handle`, so it can be
 * composed directly into a `sequence()`; place it before hooks whose
 * `transformPageChunk` produces the final markup.
 */
export function createSsrHandle(options?: SsrRendererOptions): <Event>(input: SsrHandleInput<Event>) => Promise<Response>
