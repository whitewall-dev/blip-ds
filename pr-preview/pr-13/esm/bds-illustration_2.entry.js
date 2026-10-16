import { r as registerInstance, h, H as Host, g as getElement } from './index-Cawn__Z9.js';

const illustrationCss = () => `:host .illustration{display:flex;height:100%;width:auto}:host img{width:100%;height:100%}`;

const DATA_URL_PREFIX = 'data:image/svg+xml;base64,';
const bucketLoaders = {
    default: () => import('./assets_illustrations_default-BdI52TnG.js'),
    screens: () => import('./assets_illustrations_screens-p_VDCWl-.js'),
    'blip-solid': () => import('./assets_illustrations_blip-solid-DCcZBEXD.js'),
    'blip-outline': () => import('./assets_illustrations_blip-outline-Btpvc-MR.js'),
    'logo-integration': () => import('./assets_illustrations_logo-integration-B9fsPTuf.js'),
    'empty-states': () => import('./assets_illustrations_empty-states-C-8VptzA.js'),
    brand: () => import('./assets_illustrations_brand-84e30yL2.js'),
    segmented: () => import('./assets_illustrations_segmented-C7Rr0sYC.js'),
    smartphone: () => import('./assets_illustrations_smartphone-DyOyv4hr.js'),
    spots: () => import('./assets_illustrations_spots-CLVSquxy.js'),
};
const bucketsPromise = new Map();
const loadIllustrationBucket = (type) => {
    let bucket = bucketsPromise.get(type);
    if (!bucket) {
        bucket = bucketLoaders[type]().then((module) => (module.default ?? module));
        bucketsPromise.set(type, bucket);
    }
    return bucket;
};
const BdsIllustration = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Specifies the type to use. Can be: 'default', 'screens', 'blip-solid', 'blip-outline',
         * 'logo-integration', 'empty-states', 'brand', 'segmented', 'smartphone', 'spots'.
         */
        this.type = 'default';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.setIllustrationContent = async () => {
            const assets = await loadIllustrationBucket(this.type);
            this.IllustrationContent = assets[`asset-${this.type}-${this.name}-svg`];
        };
    }
    componentWillLoad() {
        // adopt the server-rendered asset instead of loading it again
        const serverRendered = this.el.shadowRoot?.querySelector('img')?.getAttribute('src');
        if (serverRendered?.startsWith(DATA_URL_PREFIX)) {
            this.IllustrationContent = serverRendered.slice(DATA_URL_PREFIX.length);
            return;
        }
        this.setIllustrationContent().catch(() => undefined);
    }
    render() {
        return (h(Host, { key: 'f9afbaf0c17499f0750718c4c197f4a04516690e', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return getElement(this); }
};
BdsIllustration.style = illustrationCss();

const skeletonCss = () => `.skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;animation:2.5s ease-out infinite shine}@keyframes shine{0%{transform:translateX(-100%)}20%{transform:translateX(100%)}100%{transform:translateX(100%)}}`;

const Skeleton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.shape = 'square';
        this.height = '50px';
        this.width = '100%';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: '096bd4a0d5488514a4e4175365b2cdc72b2f95be', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, h("bds-grid", { key: '065cfd3a18bfb3e5235eaa1ba7cb4551de1bbfcc', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { key: '65afb39b74e9fd0a44e3b11c5b26d5726136eee2', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, h("div", { key: '6d1069c509fff8283cb7456a96cdd6d43fb83845', class: "animation" }))));
    }
};
Skeleton.style = skeletonCss();

export { BdsIllustration as bds_illustration, Skeleton as bds_skeleton };
