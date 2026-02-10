type PrimitiveAttr = string | number | boolean | null | undefined;
type BlipDSIntrinsicElements = import('../loader/index').JSX.IntrinsicElements;
type GlobalElementAttributes = import('svelte/elements').SvelteHTMLElements['div'];

type KebabCase<S extends string, IsFirst extends boolean = true> = S extends `${infer C}${infer R}`
  ? C extends Lowercase<C>
    ? `${Lowercase<C>}${KebabCase<R, false>}`
    : `${IsFirst extends true ? '' : '-'}${Lowercase<C>}${KebabCase<R, false>}`
  : S;

type KebabNonEventProps<T> = {
  [P in keyof T as P extends string
    ? P extends `on${string}`
      ? never
      : KebabCase<P>
    : never]?: T[P] | PrimitiveAttr;
};

type EventProps<T> = {
  [P in keyof T as P extends `on${infer E}` ? `on${Uncapitalize<E>}` : never]?: T[P];
} & {
  [P in keyof T as P extends `on${infer E}` ? `on:${Uncapitalize<E>}` : never]?: T[P];
};

type BlipDSElements = {
  [K in keyof BlipDSIntrinsicElements]: GlobalElementAttributes &
    KebabNonEventProps<BlipDSIntrinsicElements[K]> &
    EventProps<BlipDSIntrinsicElements[K]>;
};

declare module 'svelte/elements' {
  interface SvelteHTMLElements extends BlipDSElements {}
}

declare global {
  // Compatibility for language servers that still read the svelteHTML namespace.
  // biome-ignore lint/style/noNamespace: required for svelte typing compatibility
  namespace svelteHTML {
    interface IntrinsicElements extends BlipDSElements {}
  }
}
