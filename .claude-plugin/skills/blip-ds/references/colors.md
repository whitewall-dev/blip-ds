# Blip DS Colors

Prefer Tailwind classes from `references/tailwind.md` in day-to-day styling. Use this file when you need theme-level token overrides, CSS variable references, or raw token values.

CSS variables (e.g., `--color-primary`) are the underlying source for those utilities. The SCSS tokens below map to those variables and define light/dark defaults.

## Brand
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-brand` | `--color-brand` | `rgba(0, 150, 250, 1)` | `rgba(0, 150, 250, 1)` | Brand and primary actions. |
| `$color-primary` | `--color-primary` | `rgba(30, 107, 241, 1)` | `rgba(73, 139, 255, 1)` | Brand and primary actions. |
| `$color-secondary` | `--color-secondary` | `rgba(41, 41, 41, 1)` | `rgba(255, 255, 255, 1)` | Brand and primary actions. |

## Surfaces
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-surface-0` | `--color-surface-0` | `rgba(255, 255, 255, 1)` | `rgba(66, 66, 66, 1)` | Background surfaces. |
| `$color-surface-1` | `--color-surface-1` | `rgba(246, 246, 246, 1)` | `rgba(57, 57, 57, 1)` | Background surfaces. |
| `$color-surface-2` | `--color-surface-2` | `rgba(237, 237, 237, 1)` | `rgba(31, 31, 31, 1)` | Background surfaces. |
| `$color-surface-3` | `--color-surface-3` | `rgba(227, 227, 227, 1)` | `rgba(20, 20, 20, 1)` | Background surfaces. |
| `$color-surface-4` | `--color-surface-4` | `rgba(20, 20, 20, 1)` | `rgba(10, 10, 10, 1)` | Background surfaces. |
| `$color-surface-positive` | `--color-surface-positive` | `rgba(1, 114, 62, 1)` | `rgba(1, 86, 47, 1)` | Background surfaces. |
| `$color-surface-negative` | `--color-surface-negative` | `rgba(138, 0, 0, 1)` | `rgba(87, 0, 0, 1)` | Background surfaces. |
| `$color-surface-primary` | `--color-surface-primary` | `rgba(30, 107, 241, 1)` | `rgba(12, 80, 197, 1)` | Background surfaces. |

## Content
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-content-default` | `--color-content-default` | `rgba(40, 40, 40, 1)` | `rgba(255, 255, 255, 1)` | Text and icon content. |
| `$color-content-disable` | `--color-content-disable` | `rgba(89, 89, 89, 1)` | `rgba(148, 148, 148, 1)` | Text and icon content. |
| `$color-content-ghost` | `--color-content-ghost` | `rgba(140, 140, 140, 1)` | `rgba(102, 102, 102, 1)` | Text and icon content. |
| `$color-content-bright` | `--color-content-bright` | `rgba(255, 255, 255, 1)` | `rgba(255, 255, 255, 1)` | Text and icon content. |
| `$color-content-din` | `--color-content-din` | `rgba(0, 0, 0, 1)` | `rgba(0, 0, 0, 1)` | Text and icon content. |

## Borders
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-border-1` | `--color-border-1` | `rgba(0,0,0,.20)` | `rgba(255,255,255,.20)` | Borders and separators. |
| `$color-border-2` | `--color-border-2` | `rgba(0,0,0,.16)` | `rgba(255,255,255,.16)` | Borders and separators. |
| `$color-border-3` | `--color-border-3` | `rgba(0,0,0,.06)` | `rgba(255,255,255,.06)` | Borders and separators. |

## Status
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-info` | `--color-info` | `rgba(128, 227, 235, 1)` | `rgba(0, 79, 86, 1)` | Feedback and semantic states. |
| `$color-system` | `--color-system` | `rgba(178, 223, 253, 1)` | `rgba(0, 60, 100, 1)` | Feedback and semantic states. |
| `$color-focus` | `--color-focus` | `rgba(194, 38, 251, 1)` | `rgba(194, 38, 251, 1)` | Feedback and semantic states. |
| `$color-success` | `--color-success` | `rgba(132, 235, 188, 1)` | `rgba(53, 94, 75, 1)` | Feedback and semantic states. |
| `$color-warning` | `--color-warning` | `rgba(253, 233, 155, 1)` | `rgba(96, 89, 59, 1)` | Feedback and semantic states. |
| `$color-error` | `--color-error` | `rgba(250, 190, 190, 1)` | `rgba(123, 61, 61, 1)` | Feedback and semantic states. |
| `$color-delete` | `--color-delete` | `rgba(230, 15, 15, 1)` | `rgba(182, 12, 12, 1)` | Feedback and semantic states. |
| `$color-positive` | `--color-positive` | `rgba(0, 122, 66, 1)` | `rgba(107, 255, 188, 1)` | Feedback and semantic states. |
| `$color-negative` | `--color-negative` | `rgba(168, 11, 11, 1)` | `rgba(255, 184, 184, 1)` | Feedback and semantic states. |

## Extended
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-extended-blue` | `--color-extended-blue` | `rgba(25, 104, 240, 1)` | `rgba(25, 104, 240, 1)` | Data viz accents or tag colors. |
| `$color-extended-blue-bright` | `--color-extended-blue-bright` | `rgba(178, 223, 253, 1)` | `rgba(178, 223, 253, 1)` | Data viz accents or tag colors. |
| `$color-extended-ocean` | `--color-extended-ocean` | `rgba(0, 211, 228, 1)` | `rgba(0, 211, 228, 1)` | Data viz accents or tag colors. |
| `$color-extended-ocean-bright` | `--color-extended-ocean-bright` | `rgba(128, 227, 235, 1)` | `rgba(128, 227, 235, 1)` | Data viz accents or tag colors. |
| `$color-extended-green` | `--color-extended-green` | `rgba(53, 222, 144, 1)` | `rgba(53, 222, 144, 1)` | Data viz accents or tag colors. |
| `$color-extended-green-bright` | `--color-extended-green-bright` | `rgba(132, 235, 188, 1)` | `rgba(132, 235, 188, 1)` | Data viz accents or tag colors. |
| `$color-extended-yellow` | `--color-extended-yellow` | `rgba(251, 207, 35, 1)` | `rgba(251, 207, 35, 1)` | Data viz accents or tag colors. |
| `$color-extended-yellow-bright` | `--color-extended-yellow-bright` | `rgba(253, 233, 155, 1)` | `rgba(253, 233, 155, 1)` | Data viz accents or tag colors. |
| `$color-extended-orange` | `--color-extended-orange` | `rgba(240, 99, 5, 1)` | `rgba(240, 99, 5, 1)` | Data viz accents or tag colors. |
| `$color-extended-orange-bright` | `--color-extended-orange-bright` | `rgba(252, 170, 115, 1)` | `rgba(252, 170, 115, 1)` | Data viz accents or tag colors. |
| `$color-extended-red` | `--color-extended-red` | `rgba(230, 15, 15, 1)` | `rgba(230, 15, 15, 1)` | Data viz accents or tag colors. |
| `$color-extended-red-bright` | `--color-extended-red-bright` | `rgba(249, 159, 159, 1)` | `rgba(249, 159, 159, 1)` | Data viz accents or tag colors. |
| `$color-extended-pink` | `--color-extended-pink` | `rgba(251, 75, 193, 1)` | `rgba(251, 75, 193, 1)` | Data viz accents or tag colors. |
| `$color-extended-pink-bright` | `--color-extended-pink-bright` | `rgba(253, 155, 220, 1)` | `rgba(253, 155, 220, 1)` | Data viz accents or tag colors. |
| `$color-extended-gray` | `--color-extended-gray` | `rgba(102, 102, 102, 1)` | `rgba(102, 102, 102, 1)` | Data viz accents or tag colors. |
| `$color-extended-gray-bright` | `--color-extended-gray-bright` | `rgba(199, 199, 199, 1)` | `rgba(199, 199, 199, 1)` | Data viz accents or tag colors. |

## Actions
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-hover` | `--color-hover` | `rgba(0, 0, 0, 0.08)` | `rgba(255, 255, 255, 0.16)` | Hover/pressed overlays. |
| `$color-pressed` | `--color-pressed` | `rgba(0, 0, 0, 0.16)` | `rgba(255, 255, 255, 0.08)` | Hover/pressed overlays. |

## Shadows
| Token | CSS Variable | Light Value | Dark Value | Usage |
| --- | --- | --- | --- | --- |
| `$color-shadow-0` | `--color-shadow-0` | `rgba(0, 0, 0, 0.04)` | `` | Shadow colors. |
| `$color-shadow-1` | `--color-shadow-1` | `rgba(0, 0, 0, 0.16)` | `` | Shadow colors. |

## Custom Colors
| Token | Value | Usage |
| --- | --- | --- |
| `$color-secondary-undo` | `#485c73` | Legacy or brand-specific accents. |
| `$color-secondary-redo` | `#485c73` | Legacy or brand-specific accents. |
| `$color-facebook-main` | `#1877f2` | Legacy or brand-specific accents. |
| `$color-facebook-dark` | `#1771e6` | Legacy or brand-specific accents. |

## Usage Notes
- Use surface tokens for backgrounds and containers.
- Use content tokens for text and icons to preserve contrast.
- Use status tokens for feedback states, not for decorative accents.
