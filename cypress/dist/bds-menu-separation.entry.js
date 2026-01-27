import { r as registerInstance, h } from './index-4a97732a.js';

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d2dfe6}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";
const BdsMenuSeparationStyle0 = menuSeparationCss;

const BdsMenuSeparation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = null;
        this.size = null;
    }
    render() {
        return (h("div", { key: 'acc8bc3d54baeca26463db28c3f67958006a2835', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '82816b0dbebf6917872b6ba5d1e6a3e6d909a549', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: 'f9c41f6389a64be26ec677b9a45efae9b7f50262', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = BdsMenuSeparationStyle0;

export { BdsMenuSeparation as bds_menu_separation };
