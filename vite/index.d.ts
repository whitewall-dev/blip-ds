import type { Plugin } from 'vite'

export interface BlipDsAssetPurgeOptions {
  /**
   * Asset names to always keep, regardless of detected usage. Use this for icons,
   * emojis or logos whose names are built dynamically (e.g. by string concatenation)
   * and therefore can't be found by static analysis.
   */
  safelist?: string[]
}

/**
 * Vite/Rollup plugin that tree-shakes the `@whitewall/blip-ds` icon, emoji and logo
 * asset buckets down to the assets actually reachable in the consuming app.
 */
export function blipDsAssetPurge(options?: BlipDsAssetPurgeOptions): Plugin
