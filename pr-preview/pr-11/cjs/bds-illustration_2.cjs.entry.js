'use strict';

var index = require('./index-qGbe2oR8.js');

const illustrationCss = () => `:host .illustration{display:flex;height:100%;width:auto}:host img{width:100%;height:100%}`;

const DATA_URL_PREFIX = 'data:image/svg+xml;base64,';
const bucketLoaders = {
    default: () => Promise.resolve().then(function () { return require('./assets_illustrations_default-CBSDN2_g.js'); }),
    screens: () => Promise.resolve().then(function () { return require('./assets_illustrations_screens-BhHjWDXi.js'); }),
    'blip-solid': () => Promise.resolve().then(function () { return require('./assets_illustrations_blip-solid-Ckiq0ESA.js'); }),
    'blip-outline': () => Promise.resolve().then(function () { return require('./assets_illustrations_blip-outline-DYS1Ak-A.js'); }),
    'logo-integration': () => Promise.resolve().then(function () { return require('./assets_illustrations_logo-integration-DwTZkiU7.js'); }),
    'empty-states': () => Promise.resolve().then(function () { return require('./assets_illustrations_empty-states-BqQBVc-v.js'); }),
    brand: () => Promise.resolve().then(function () { return require('./assets_illustrations_brand-DTTmSeoS.js'); }),
    segmented: () => Promise.resolve().then(function () { return require('./assets_illustrations_segmented-CmNryBAu.js'); }),
    smartphone: () => Promise.resolve().then(function () { return require('./assets_illustrations_smartphone-DJfZ2hGt.js'); }),
    spots: () => Promise.resolve().then(function () { return require('./assets_illustrations_spots-CD9eXp_u.js'); }),
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
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'f9afbaf0c17499f0750718c4c197f4a04516690e', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (index.h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (index.h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return index.getElement(this); }
};
BdsIllustration.style = illustrationCss();

const skeletonCss = () => `.skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;animation:2.5s ease-out infinite shine}@keyframes shine{0%{transform:translateX(-100%)}20%{transform:translateX(100%)}100%{transform:translateX(100%)}}`;

const Skeleton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.shape = 'square';
        this.height = '50px';
        this.width = '100%';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (index.h(index.Host, { key: '096bd4a0d5488514a4e4175365b2cdc72b2f95be', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, index.h("bds-grid", { key: '065cfd3a18bfb3e5235eaa1ba7cb4551de1bbfcc', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), index.h("div", { key: '65afb39b74e9fd0a44e3b11c5b26d5726136eee2', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, index.h("div", { key: '6d1069c509fff8283cb7456a96cdd6d43fb83845', class: "animation" }))));
    }
};
Skeleton.style = skeletonCss();

exports.bds_illustration = BdsIllustration;
exports.bds_skeleton = Skeleton;
