/* eslint-disable @typescript-eslint/no-explicit-any */
import { Build, Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { IconSize, IconTheme, IconType } from './icon-interface';
import { formatSvg, getIconName, getEmojiName, getLogoName } from './utils';

type AssetMap = Record<string, string>;
type IconBucket = 'non-flag-outline' | 'non-flag-solid' | 'flag-outline' | 'flag-solid';

let emojisPromise: Promise<AssetMap> | null = null;
let logosPromise: Promise<AssetMap> | null = null;
const iconBucketsPromise: Partial<Record<IconBucket, Promise<AssetMap>>> = {};

const getAsset = (assets: AssetMap, key: string): string => {
  const raw = assets[key];
  if (!raw) {
    throw new Error(`Missing asset: ${key}`);
  }
  return raw;
};

const iconBucketLoaders: Record<IconBucket, () => Promise<AssetMap>> = {
  'non-flag-outline': async () =>
    import('../../assets/blip-tokens/assets_icons_non_flag_outline.json').then(
      (module) => (module.default ?? module) as AssetMap,
    ),
  'non-flag-solid': async () =>
    import('../../assets/blip-tokens/assets_icons_non_flag_solid.json').then(
      (module) => (module.default ?? module) as AssetMap,
    ),
  'flag-outline': async () =>
    import('../../assets/blip-tokens/assets_icons_flag_outline.json').then(
      (module) => (module.default ?? module) as AssetMap,
    ),
  'flag-solid': async () =>
    import('../../assets/blip-tokens/assets_icons_flag_solid.json').then(
      (module) => (module.default ?? module) as AssetMap,
    ),
};

const resolveIconBucket = (name: string, theme: IconTheme): IconBucket => {
  const isFlag = name.includes('-flag');

  if (isFlag && theme === 'solid') return 'flag-solid';
  if (isFlag && theme === 'outline') return 'flag-outline';
  if (!isFlag && theme === 'solid') return 'non-flag-solid';

  return 'non-flag-outline';
};

const loadIconBucket = async (bucket: IconBucket): Promise<AssetMap> => {
  if (!iconBucketsPromise[bucket]) {
    iconBucketsPromise[bucket] = iconBucketLoaders[bucket]();
  }
  return iconBucketsPromise[bucket];
};

const loadEmojis = async (): Promise<AssetMap> => {
  if (!emojisPromise) {
    emojisPromise = import('../../assets/blip-tokens/assets_emojis.json').then(
      (module) => (module.default ?? module) as AssetMap,
    );
  }
  return emojisPromise;
};

const loadLogos = async (): Promise<AssetMap> => {
  if (!logosPromise) {
    logosPromise = import('../../assets/blip-tokens/assets_logos.json').then(
      (module) => (module.default ?? module) as AssetMap,
    );
  }
  return logosPromise;
};

@Component({
  tag: 'bds-icon',
  assetsDirs: ['svg'],
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  private io?: IntersectionObserver;
  private loadId = 0;

  @Element() el!: HTMLElement;

  @State() private svgContent?: string;
  @State() private isVisible = false;

  /**
   * Specifies the color to use.Specifies a color to use. The default is svg.
   */
  @Prop() color?: string;

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ mutable: true, reflect: true }) ariaLabel: string;

  /**
   * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
   */
  @Prop() flipRtl?: boolean;

  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  @Prop() name?: string;

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;

  /**
   * A combination of both `name` and `src`. If a `src` url is detected
   * it will set the `src` property. Otherwise it assumes it's a built-in named
   * SVG and set the `name` property.
   */
  @Prop() icon?: any;

  /**
   * Icon size. Entered as one of the icon size design tokens. Can be one of:
   * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "brand".
   */
  @Prop() size?: IconSize = 'medium';

  /**
   * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
   * Default, `false`.
   */
  @Prop() lazy = false;

  /**
   * Specifies the theme to use outline or solid icons. Defaults to outline.
   */
  @Prop({ reflect: true }) theme: IconTheme = 'outline';

  /**
   * Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property.
   */
  @Prop() type: IconType = 'icon';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  connectedCallback(): void {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }

  disconnectedCallback(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  private waitUntilVisible(el: HTMLElement, cb: () => void): void {
    if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && (window as any).IntersectionObserver) {
      const io = (this.io = new (window as any).IntersectionObserver((data: IntersectionObserverEntry[]) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }));

      io.observe(el);
    } else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }

  @Watch('name')
  @Watch('src')
  @Watch('icon')
  @Watch('theme')
  async loadIcon(): Promise<void> {
    if (!this.name) return;

    if (Build.isBrowser && this.isVisible) {
      await this.setSvgContent();
    }

    if (!this.ariaLabel) {
      const label = this.name;
      if (label) {
        this.ariaLabel = label;
      }
    }
  }

  private setSvgContent = async () => {
    const loadId = ++this.loadId;
    const name = this.name;
    const theme = this.theme;
    const type = this.type;
    const color = this.color;
    let svg;
    try {
      if (type === 'icon') {
        const bucket = resolveIconBucket(name, theme);
        const icons = await loadIconBucket(bucket);
        if (this.loadId !== loadId) return;
        const key = getIconName(name, theme);
        svg = getAsset(icons, key);

        this.svgContent = formatSvg(svg, color);
      } else if (type === 'emoji') {
        const emojiMap = await loadEmojis();
        if (this.loadId !== loadId) return;
        const key = getEmojiName(name);
        svg = getAsset(emojiMap, key);
        this.svgContent = formatSvg(svg, color, true);
      } else if (type === 'logo') {
        const logoMap = await loadLogos();
        if (this.loadId !== loadId) return;
        const key = getLogoName(name);
        svg = getAsset(logoMap, key);
        this.svgContent = formatSvg(svg, color, true);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[Warning]: Failed to setSvgContent to', this.name);
    }
  };

  render(): HTMLElement {
    return (
      <Host
        role="img"
        class={{
          'bds-icon': true,
          [`bds-icon__size--${this.size}`]: true,
        }}
      >
        {this.svgContent ? (
          <div
            class={{
              'icon-inner': this.type === 'icon',
              'emoji-inner': this.type === 'emoji',
              'logo-inner': this.type === 'logo',
            }}
            innerHTML={this.svgContent}
            data-test={this.dataTest}
          ></div>
        ) : (
          <div class="icon-inner" data-test={this.dataTest}></div>
        )}
      </Host>
    );
  }
}
