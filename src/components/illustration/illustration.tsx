import { Build, Component, Element, h, Host, Prop, State } from '@stencil/core';
import { IllustrationType } from './illustration-interface';

type AssetMap = Record<string, string>;

const DATA_URL_PREFIX = 'data:image/svg+xml;base64,';

const bucketLoaders: Record<IllustrationType, () => Promise<unknown>> = {
  default: () => import('../../assets/blip-tokens/assets_illustrations_default.json'),
  screens: () => import('../../assets/blip-tokens/assets_illustrations_screens.json'),
  'blip-solid': () => import('../../assets/blip-tokens/assets_illustrations_blip-solid.json'),
  'blip-outline': () => import('../../assets/blip-tokens/assets_illustrations_blip-outline.json'),
  'logo-integration': () => import('../../assets/blip-tokens/assets_illustrations_logo-integration.json'),
  'empty-states': () => import('../../assets/blip-tokens/assets_illustrations_empty-states.json'),
  brand: () => import('../../assets/blip-tokens/assets_illustrations_brand.json'),
  segmented: () => import('../../assets/blip-tokens/assets_illustrations_segmented.json'),
  smartphone: () => import('../../assets/blip-tokens/assets_illustrations_smartphone.json'),
  spots: () => import('../../assets/blip-tokens/assets_illustrations_spots.json'),
};

const bucketsPromise = new Map<IllustrationType, Promise<AssetMap>>();

const loadIllustrationBucket = (type: IllustrationType): Promise<AssetMap> => {
  let bucket = bucketsPromise.get(type);
  if (!bucket) {
    bucket = bucketLoaders[type]().then((module) => ((module as { default?: AssetMap }).default ?? module) as AssetMap);
    bucketsPromise.set(type, bucket);
  }
  return bucket;
};

@Component({
  tag: 'bds-illustration',
  assetsDirs: ['svg'],
  styleUrl: 'illustration.scss',
  shadow: true,
})
export class BdsIllustration {
  @Element() el!: HTMLElement;

  @State() private IllustrationContent?: string;

  /**
   * Specifies the type to use. Can be: 'default', 'screens', 'blip-solid', 'blip-outline',
   * 'logo-integration', 'empty-states', 'brand', 'segmented', 'smartphone', 'spots'.
   */
  @Prop() type: IllustrationType = 'default';
  /**
   * Specifies the name of illustration. Verify the names on illustration tokens.
   */
  @Prop() name: string;

  /**
   * Alternative text for the image.
   */
  @Prop() alt?: string;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  componentWillLoad(): Promise<void> | void {
    // server-side rendering awaits the asset so it is part of the serialized shadow
    // DOM; in the browser it keeps loading in the background as before
    if (!Build.isBrowser) {
      return this.setIllustrationContent().catch(() => undefined);
    }

    // adopt the server-rendered asset instead of loading it again
    const serverRendered = this.el.shadowRoot?.querySelector('img')?.getAttribute('src');
    if (serverRendered?.startsWith(DATA_URL_PREFIX)) {
      this.IllustrationContent = serverRendered.slice(DATA_URL_PREFIX.length);
      return;
    }

    this.setIllustrationContent().catch(() => undefined);
  }

  setIllustrationContent = async (): Promise<void> => {
    const assets = await loadIllustrationBucket(this.type);
    this.IllustrationContent = assets[`asset-${this.type}-${this.name}-svg`];
  };

  render(): HTMLElement {
    return (
      <Host
        role="img"
        class={{
          'bds-illustration': true,
        }}
      >
        {this.IllustrationContent ? (
          <img
            draggable={false}
            src={`data:image/svg+xml;base64,${this.IllustrationContent}`}
            alt={this.alt}
            data-test={this.dataTest}
          />
        ) : (
          <div class="default" data-test={this.dataTest}></div>
        )}
      </Host>
    );
  }
}
