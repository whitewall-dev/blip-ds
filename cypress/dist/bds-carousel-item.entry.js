import { r as registerInstance, h, H as Host } from './index-4a97732a.js';

const carouselItemCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}";
const BdsCarouselItemStyle0 = carouselItemCss;

const BdsCarouselItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.theme = 'light';
        this.bgImage = undefined;
        this.bgImageBrightness = 1;
        this.bgColor = undefined;
    }
    render() {
        return (h(Host, { key: 'ebfdf0239ba4d37cf2a4cda25a7f4dc218a54fdc', class: "carrosel-item" }, h("bds-theme-provider", { key: '26f07e1cc102f5a4477b53e1328abc85b5770167', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '86e54cca972913460b72afed4ffa520fab8ce9f5', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: 'b9b4bc60e68d5036ad59547a635487ccc9ff9d9e' }))));
    }
};
BdsCarouselItem.style = BdsCarouselItemStyle0;

export { BdsCarouselItem as bds_carousel_item };
