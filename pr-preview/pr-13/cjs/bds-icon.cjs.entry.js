'use strict';

var index = require('./index-qGbe2oR8.js');

const FILL_ELEMENTS = ['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline', 'line'];
const getFilledElements = (svg) => {
    const elements = [];
    for (const tag of FILL_ELEMENTS) {
        const found = svg.getElementsByTagName(tag);
        for (let i = 0; i < found.length; i++) {
            elements.push(found[i]);
        }
    }
    return elements;
};
const clearAllFillColors = (svg, color) => {
    const elements = getFilledElements(svg);
    for (const el of elements) {
        el.setAttribute('fill', color);
    }
    svg.setAttribute('fill', color);
};
const isMultiColorIcon = (svg) => {
    const elements = getFilledElements(svg);
    const fills = new Set();
    for (const el of elements) {
        const fill = el.getAttribute('fill');
        if (fill && fill !== 'none' && fill !== 'currentColor') {
            fills.add(fill.toLowerCase());
        }
    }
    return fills.size > 1;
};
const applyColorVariables = (svg) => {
    const elements = getFilledElements(svg);
    // First pass: identify unique fill colors and assign layer indices
    const colorToLayerIndex = new Map();
    let layerIndex = 0;
    for (const el of elements) {
        const fill = el.getAttribute('fill');
        if (fill && fill !== 'none' && fill !== 'currentColor') {
            const normalizedFill = fill.toLowerCase();
            if (!colorToLayerIndex.has(normalizedFill)) {
                colorToLayerIndex.set(normalizedFill, layerIndex);
                layerIndex++;
            }
        }
    }
    // Second pass: apply CSS variables using the color-to-layer mapping
    for (const el of elements) {
        const currentFill = el.getAttribute('fill');
        if (currentFill && currentFill !== 'none' && currentFill !== 'currentColor') {
            const normalizedFill = currentFill.toLowerCase();
            const layer = colorToLayerIndex.get(normalizedFill);
            el.style.fill = `var(--icon-layer-${layer}, ${currentFill})`;
            el.setAttribute('data-customizable', 'true');
        }
    }
};
const formatSvg = (svgContent, color, emoji = false) => {
    if (svgContent) {
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        const svgElm = div.firstElementChild;
        if (!svgElm) {
            return '';
        }
        svgElm.removeAttribute('width');
        svgElm.removeAttribute('height');
        if (!emoji) {
            if (color) {
                clearAllFillColors(svgElm, color);
            }
            else if (isMultiColorIcon(svgElm)) {
                applyColorVariables(svgElm);
            }
            else {
                clearAllFillColors(svgElm, 'currentColor');
            }
        }
        return div.innerHTML;
    }
    return '';
};
const formattedSvgCache = new Map();
// formatSvg parses the asset through the DOM on every call; icons repeat a lot on a
// page (and on the server every instance pays it), so memoize per asset/color.
const formatSvgCached = (key, svgContent, color, emoji = false) => {
    const cacheKey = `${key}|${color ?? ''}|${emoji}`;
    let formatted = formattedSvgCache.get(cacheKey);
    if (formatted === undefined) {
        formatted = formatSvg(svgContent, color, emoji);
        formattedSvgCache.set(cacheKey, formatted);
    }
    return formatted;
};
const getIconName = (name, theme) => {
    return `asset-icon-${name}-${theme}`;
};
const getEmojiName = (name) => {
    return `asset-emoji-${name}`;
};
const getLogoName = (name) => {
    return `asset-logo-${name}`;
};

const iconCss = () => `:host{display:inline-block;width:1em;height:1em;color:var(--color-content-default, rgb(40, 40, 40));fill:currentColor;box-sizing:content-box !important}:host svg{display:block;fill:currentColor;width:100%;min-width:100%}.icon-inner{max-width:100%;height:100%}.emoji-inner{max-width:100%;height:100%;display:flex}:host(.bds-icon){display:inline-block}:host(.bds-icon) svg{fill:currentColor;width:100%;min-width:100%}:host(.bds-icon__size--brand),:host([size=brand]){width:64px;min-width:64px;height:64px;max-height:64px;min-height:64px}:host(.bds-icon__size--xxx-large),:host([size=xxx-large]){width:40px;min-width:40px;height:40px;max-height:40px;min-height:40px}:host(.bds-icon__size--xx-large),:host([size=xx-large]){width:36px;min-width:36px;height:36px;max-height:36px;min-height:36px}:host(.bds-icon__size--x-large),:host([size=x-large]){width:32px;min-width:32px;height:32px;max-height:32px;min-height:32px}:host(.bds-icon__size--large),:host([size=large]){width:28px;min-width:28px;height:28px;max-height:28px;min-height:28px}:host(.bds-icon__size--medium),:host([size=medium]){width:24px;min-width:24px;height:24px;max-height:24px;min-height:24px}:host(.bds-icon__size--small),:host([size=small]){width:20px;min-width:20px;height:20px;max-height:20px;min-height:20px}:host(.bds-icon__size--x-small),:host([size=x-small]){width:16px;min-width:16px;height:16px;max-height:16px;min-height:16px}:host(.bds-icon__size--xx-small),:host([size=xx-small]){width:12px;min-width:12px;height:12px;max-height:12px;min-height:12px}`;

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
    'non-flag-outline': async () => Promise.resolve().then(function () { return require('./assets_icons_non_flag_outline-DmHxoDEj.js'); }).then((module) => (module.default ?? module)),
    'non-flag-solid': async () => Promise.resolve().then(function () { return require('./assets_icons_non_flag_solid-Bp6rKwzZ.js'); }).then((module) => (module.default ?? module)),
    'flag-outline': async () => Promise.resolve().then(function () { return require('./assets_icons_flag_outline-DjjbN2Tb.js'); }).then((module) => (module.default ?? module)),
    'flag-solid': async () => Promise.resolve().then(function () { return require('./assets_icons_flag_solid-L8ONNBaw.js'); }).then((module) => (module.default ?? module)),
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
        emojisPromise = Promise.resolve().then(function () { return require('./assets_emojis-BLIDANIV.js'); }).then((module) => (module.default ?? module));
    }
    return emojisPromise;
};
const loadLogos = async () => {
    if (!logosPromise) {
        logosPromise = Promise.resolve().then(function () { return require('./assets_logos-BwuhX6as.js'); }).then((module) => (module.default ?? module));
    }
    return logosPromise;
};
const Icon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, cb) {
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
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
        return (index.h(index.Host, { key: '3bf7aae63d16811a882f9535c9a83edc108608d7', role: "img", class: {
                'bds-icon': true,
                [`bds-icon__size--${this.size}`]: true,
            } }, this.svgContent ? (index.h("div", { class: {
                'icon-inner': this.type === 'icon',
                'emoji-inner': this.type === 'emoji',
                'logo-inner': this.type === 'logo',
            }, innerHTML: this.svgContent, "data-test": this.dataTest })) : (index.h("div", { class: "icon-inner", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "name": [{
                "loadIcon": 0
            }],
        "src": [{
                "loadIcon": 0
            }],
        "icon": [{
                "loadIcon": 0
            }],
        "color": [{
                "loadIcon": 0
            }],
        "theme": [{
                "loadIcon": 0
            }]
    }; }
};
Icon.style = iconCss();

exports.bds_icon = Icon;
