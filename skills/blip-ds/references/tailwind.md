# Blip DS Tailwind Plugin

Use the Tailwind plugin from `@whitewall/blip-ds/tailwind` to get Blip DS tokens as Tailwind classes.

Default rule: use these Tailwind classes first. Reach for raw CSS variables only for global theming or when a class is missing.

## Install

```bash
npm install @whitewall/blip-ds tailwindcss
```

## Configure

Add the plugin directly in your CSS:

```css
@import "tailwindcss";
@plugin "@whitewall/blip-ds/tailwind";
```

If you still need a JS config file, include it via `@config`:

```css
@config "./tailwind.config.js";
```

And keep it minimal:

```js
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,svelte}'],
}
```

## Colors

All colors map to CSS variables so theming works with `bds-theme-provider` or your own CSS variable overrides.

- Brand: `text-brand`, `bg-brand`, `border-brand`
- Primary/Secondary: `text-primary`, `bg-primary`, `text-secondary`
- Surfaces: `bg-surface-0` ... `bg-surface-4`, `bg-surface-positive`, `bg-surface-negative`, `bg-surface-primary`
- Content: `text-content-default`, `text-content-disable`, `text-content-ghost`, `text-content-bright`, `text-content-din`
- Borders: `border-border-1`, `border-border-2`, `border-border-3`
- Status: `text-info`, `text-system`, `text-focus`, `text-success`, `text-warning`, `text-error`, `text-delete`
- Signals: `text-positive`, `text-negative`
- Extended: `text-extended-blue`, `text-extended-blue-bright`, `text-extended-ocean`, `text-extended-green`, `text-extended-yellow`, `text-extended-orange`, `text-extended-red`, `text-extended-pink`, `text-extended-gray` (and `-bright` variants)
- Actions: `bg-hover`, `bg-pressed`
- Shadows (as colors): `text-shadow-0`, `text-shadow-1`

## Typography

- Font family: `font-blip`
- Font sizes: `text-fs-40`, `text-fs-32`, `text-fs-24`, `text-fs-20`, `text-fs-16`, `text-fs-14`, `text-fs-12`, `text-fs-10`
- Line heights: `leading-none`, `leading-small`, `leading-simple`, `leading-plus`, `leading-double`
- Font weights: `font-regular`, `font-semi-bold`, `font-bold`, `font-extra-bold`

## Notes

- These classes reference CSS variables like `--color-primary`. Ensure Blip DS styles are loaded or define your own variables.
- Prefer utility classes such as `text-primary` and `bg-surface-1` instead of writing `var(--...)` directly in component styles.
- For component usage, see `SKILL.md` and `references/components-api.md`.
