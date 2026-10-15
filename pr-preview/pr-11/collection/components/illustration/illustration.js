import { Build, h, Host } from "@stencil/core";
const DATA_URL_PREFIX = 'data:image/svg+xml;base64,';
const bucketLoaders = {
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
const bucketsPromise = new Map();
const loadIllustrationBucket = (type) => {
    let bucket = bucketsPromise.get(type);
    if (!bucket) {
        bucket = bucketLoaders[type]().then((module) => (module.default ?? module));
        bucketsPromise.set(type, bucket);
    }
    return bucket;
};
export class BdsIllustration {
    constructor() {
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
    render() {
        return (h(Host, { key: 'f9afbaf0c17499f0750718c4c197f4a04516690e', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get is() { return "bds-illustration"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["illustration.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["illustration.css"]
        };
    }
    static get assetsDirs() { return ["svg"]; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IllustrationType",
                    "resolved": "\"blip-outline\" | \"blip-solid\" | \"brand\" | \"default\" | \"empty-states\" | \"logo-integration\" | \"screens\" | \"segmented\" | \"smartphone\" | \"spots\"",
                    "references": {
                        "IllustrationType": {
                            "location": "import",
                            "path": "./illustration-interface",
                            "id": "src/components/illustration/illustration-interface.ts::IllustrationType",
                            "referenceLocation": "IllustrationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the type to use. Can be: 'default', 'screens', 'blip-solid', 'blip-outline',\n'logo-integration', 'empty-states', 'brand', 'segmented', 'smartphone', 'spots'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'default'"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the name of illustration. Verify the names on illustration tokens."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "alt": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Alternative text for the image."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alt"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "IllustrationContent": {}
        };
    }
    static get elementRef() { return "el"; }
}
