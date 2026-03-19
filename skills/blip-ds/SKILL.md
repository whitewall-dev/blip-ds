---
name: blip-ds
description: Use when implementing Blip Design System web components from `@whitewall/blip-ds` in non-React projects; applying Tailwind classes from the Blip DS; configuring themes or CSS tokens; or looking up component props, events, and methods.
---

# Blip DS Web Components

## Overview
Use this skill to integrate Blip DS web components and apply Blip styling in other projects.

Default rule: prefer Blip Tailwind utility classes for styling. Use raw CSS variables only for theme-level overrides or when a utility does not exist.

## Quick Start (Web Components)

1. Install the package:

```bash
npm install @whitewall/blip-ds
```

2. Register custom elements:

```ts
import { defineCustomElements } from '@whitewall/blip-ds/loader';

defineCustomElements(window);
```

3. Load the Nunito Sans font:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
  rel="stylesheet"
/>
```

4. Use components in HTML:

```html
<bds-button variant="primary">Save</bds-button>
```

## Theming And Tokens

- Wrap sections with the theme provider:

```html
<bds-theme-provider theme="light">
  <bds-card>...</bds-card>
</bds-theme-provider>
```

- Override CSS variables at `:root` or on `bds-theme-provider` only when you need a global theme customization:

```css
:root {
  --color-primary: #1e6bf1;
  --color-surface-1: #f6f6f6;
}
```

- Read token tables in `references/colors.md` and `references/typography.md`.

## Tailwind Plugin

This is the primary styling path. Load the plugin from your CSS:

```css
@import "tailwindcss";
@plugin "@whitewall/blip-ds/tailwind";
```

Class reference and usage details live in `references/tailwind.md`.

## Component API Reference

Use `references/components-api.md` for the full list of component props, events, and methods. Events are listed by their DOM event name.

## Asset Catalog (Icons, Logos, Emojis, Illustrations)

Use `references/assets.md` for the full, project-independent list of available icon, logo, emoji, and illustration names.
