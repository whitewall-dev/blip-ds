import { r as registerInstance, h, H as Host } from './index-DSFaLz79.js';

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d2dfe6}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#ffffff}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#ffffff}";

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e3f3ca0b83df2ef5b9960cd8d05a1be49bef79d0' }, h("div", { key: 'b443864afd4531f931d2d2b52bda07dc9eaa7971', class: "menu-list" }, h("div", { key: '53a7c52513bb2b3f8ea94db5653874130ee4226a', class: "menu-list__left" }), h("slot", { key: '3f71c5b4ffb945f4097c834fe3da2fff76ba8f0b' }), h("div", { key: '98cff431f9af96c3b4bdb5461d1b0a70fd7c76e3', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss;

export { MenuList as bds_menu_list };
