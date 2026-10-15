import { r as registerInstance, h, H as Host } from './index-Cawn__Z9.js';

const menuListCss = () => `.menu-list{display:flex;width:fit-content;box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d2dfe6}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#ffffff}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#ffffff}`;

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '408ea024c267c6ff43b3e2f5a0471cd533715453' }, h("div", { key: '2df69d1cdb447525c928a639298e7ef2d493dd25', class: "menu-list" }, h("div", { key: 'd8e2cccbe7ca0c34be707a2dd7311c6e94fcae65', class: "menu-list__left" }), h("slot", { key: 'dcacf00e21ce59e07596517b4e2c14da2d1c6ecb' }), h("div", { key: 'ea0252a12a9be26d4413c3c619988faee8635534', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

export { MenuList as bds_menu_list };
