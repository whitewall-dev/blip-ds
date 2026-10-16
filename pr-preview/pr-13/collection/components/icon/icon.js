/* eslint-disable @typescript-eslint/no-explicit-any */
import { Build, Host, h } from "@stencil/core";
import { formatSvgCached, getIconName, getEmojiName, getLogoName } from "./utils";
let emojisPromise = null;
let logosPromise = null;
const iconBucketsPromise = {};
const getAsset = (assets, key) => {
    const raw = assets[key];
    if (!raw) {
        throw new Error(`Missing asset: ${key}`);
    }
    return raw;
};
const iconBucketLoaders = {
    'non-flag-outline': async () => import('../../assets/blip-tokens/assets_icons_non_flag_outline.json').then((module) => (module.default ?? module)),
    'non-flag-solid': async () => import('../../assets/blip-tokens/assets_icons_non_flag_solid.json').then((module) => (module.default ?? module)),
    'flag-outline': async () => import('../../assets/blip-tokens/assets_icons_flag_outline.json').then((module) => (module.default ?? module)),
    'flag-solid': async () => import('../../assets/blip-tokens/assets_icons_flag_solid.json').then((module) => (module.default ?? module)),
};
const resolveIconBucket = (name, theme) => {
    const isFlag = name.includes('-flag');
    if (isFlag && theme === 'solid')
        return 'flag-solid';
    if (isFlag && theme === 'outline')
        return 'flag-outline';
    if (!isFlag && theme === 'solid')
        return 'non-flag-solid';
    return 'non-flag-outline';
};
const loadIconBucket = async (bucket) => {
    if (!iconBucketsPromise[bucket]) {
        iconBucketsPromise[bucket] = iconBucketLoaders[bucket]();
    }
    return iconBucketsPromise[bucket];
};
const loadEmojis = async () => {
    if (!emojisPromise) {
        emojisPromise = import('../../assets/blip-tokens/assets_emojis.json').then((module) => (module.default ?? module));
    }
    return emojisPromise;
};
const loadLogos = async () => {
    if (!logosPromise) {
        logosPromise = import('../../assets/blip-tokens/assets_logos.json').then((module) => (module.default ?? module));
    }
    return logosPromise;
};
export class Icon {
    constructor() {
        this.loadId = 0;
        this.isVisible = false;
        /**
         * Icon size. Entered as one of the icon size design tokens. Can be one of:
         * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "brand".
         */
        this.size = 'medium';
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
        /**
         * Specifies the theme to use outline or solid icons. Defaults to outline.
         */
        this.theme = 'outline';
        /**
         * Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property.
         */
        this.type = 'icon';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.setSvgContent = async () => {
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
                    if (this.loadId !== loadId)
                        return;
                    const key = getIconName(name, theme);
                    svg = getAsset(icons, key);
                    this.svgContent = formatSvgCached(key, svg, color);
                }
                else if (type === 'emoji') {
                    const emojiMap = await loadEmojis();
                    if (this.loadId !== loadId)
                        return;
                    const key = getEmojiName(name);
                    svg = getAsset(emojiMap, key);
                    this.svgContent = formatSvgCached(key, svg, color, true);
                }
                else if (type === 'logo') {
                    const logoMap = await loadLogos();
                    if (this.loadId !== loadId)
                        return;
                    const key = getLogoName(name);
                    svg = getAsset(logoMap, key);
                    this.svgContent = formatSvgCached(key, svg, color, true);
                }
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.warn('[Warning]: Failed to setSvgContent to', this.name);
            }
        };
    }
    connectedCallback() {
        if (!Build.isBrowser) {
            return;
        }
        // adopt the server-rendered svg instead of loading the asset again; prop changes
        // still reload through the watchers
        const serverRendered = this.el.shadowRoot?.querySelector('.icon-inner, .emoji-inner, .logo-inner')?.innerHTML;
        if (serverRendered) {
            this.svgContent = serverRendered;
            this.isVisible = true;
            return;
        }
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    componentWillLoad() {
        // server-side rendering has no lazy loading: resolve the svg now so it is part
        // of the serialized shadow DOM (the hydrate runtime awaits this promise)
        if (!Build.isBrowser) {
            this.isVisible = true;
            return this.loadIcon();
        }
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, cb) {
        if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = (this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }));
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    async loadIcon() {
        if (!this.name)
            return;
        if (this.isVisible) {
            await this.setSvgContent();
        }
        if (!this.ariaLabel) {
            const label = this.name;
            if (label) {
                this.ariaLabel = label;
            }
        }
    }
    render() {
        return (h(Host, { key: '3bf7aae63d16811a882f9535c9a83edc108608d7', role: "img", class: {
                'bds-icon': true,
                [`bds-icon__size--${this.size}`]: true,
            } }, this.svgContent ? (h("div", { class: {
                'icon-inner': this.type === 'icon',
                'emoji-inner': this.type === 'emoji',
                'logo-inner': this.type === 'logo',
            }, innerHTML: this.svgContent, "data-test": this.dataTest })) : (h("div", { class: "icon-inner", "data-test": this.dataTest }))));
    }
    static get is() { return "bds-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon.css"]
        };
    }
    static get assetsDirs() { return ["svg"]; }
    static get properties() {
        return {
            "color": {
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
                    "text": "Specifies the color to use.Specifies a color to use. The default is svg."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the label to use for accessibility. Defaults to the icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "aria-label"
            },
            "flipRtl": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies whether the icon should horizontally flip when `dir` is `\"rtl\"`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "flip-rtl"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies which icon to use from the built-in set of icons."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "src": {
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
                    "text": "Specifies the exact `src` of an SVG file to use."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "src"
            },
            "icon": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A combination of both `name` and `src`. If a `src` url is detected\nit will set the `src` property. Otherwise it assumes it's a built-in named\nSVG and set the `name` property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconSize",
                    "resolved": "\"brand\" | \"large\" | \"medium\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\" | \"xxx-large\" | \"xxx-small\"",
                    "references": {
                        "IconSize": {
                            "location": "import",
                            "path": "./icon-interface",
                            "id": "src/components/icon/icon-interface.ts::IconSize",
                            "referenceLocation": "IconSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon size. Entered as one of the icon size design tokens. Can be one of:\n\"xxx-small\", \"xx-small\", \"x-small\", \"small\", \"medium\", \"large\", \"x-large\", \"xx-large\", \"xxx-large\", \"brand\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "lazy": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If enabled, ion-icon will be loaded lazily when it's visible in the viewport.\nDefault, `false`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lazy",
                "defaultValue": "false"
            },
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "IconTheme": {
                            "location": "import",
                            "path": "./icon-interface",
                            "id": "src/components/icon/icon-interface.ts::IconTheme",
                            "referenceLocation": "IconTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the theme to use outline or solid icons. Defaults to outline."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "theme",
                "defaultValue": "'outline'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconType",
                    "resolved": "\"emoji\" | \"icon\" | \"logo\"",
                    "references": {
                        "IconType": {
                            "location": "import",
                            "path": "./icon-interface",
                            "id": "src/components/icon/icon-interface.ts::IconType",
                            "referenceLocation": "IconType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'icon'"
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
            "svgContent": {},
            "isVisible": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "loadIcon"
            }, {
                "propName": "src",
                "methodName": "loadIcon"
            }, {
                "propName": "icon",
                "methodName": "loadIcon"
            }, {
                "propName": "color",
                "methodName": "loadIcon"
            }, {
                "propName": "theme",
                "methodName": "loadIcon"
            }];
    }
}
