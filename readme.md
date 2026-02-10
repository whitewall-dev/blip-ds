This fork provides newer versions of stencil and vite support.

## Commands to update

```
npm i
npm run build
npm publish
```

## Svelte IntelliSense support

This package ships Svelte-friendly type declarations and VS Code custom HTML data:

- `@whitewall/blip-ds/loader` -> includes `types/loader-svelte.d.ts`
- `@whitewall/blip-ds/svelte-elements` -> augments `svelte/elements`
- `@whitewall/blip-ds/vscode.html-data.json` -> component tags/props/events/value suggestions

In Svelte projects, add:

1. `src/app.d.ts`

```ts
/// <reference types="@whitewall/blip-ds/loader" />
```

2. `.vscode/settings.json`

```json
{
  "html.customData": ["./node_modules/@whitewall/blip-ds/types/vscode.html-data.json"]
}
```

Then restart the Svelte language server in VS Code.
