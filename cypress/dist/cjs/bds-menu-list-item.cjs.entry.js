'use strict';

var index = require('./index-Bo6hPufM.js');

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#ffffff;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#8ca0b3}";

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: '486cc71c9d69c9bf94c77997eca2dcc38df34680', role: "button" }, index.h("div", { key: '2e8fafd0983fdda254aed6067e05b79d2cc5a9d2', class: "menu-list-item" }, index.h("bds-icon", { key: '577fb7b16df9fad82277e9550edd31655ae683e4', color: color, name: this.icon }), index.h("bds-typo", { key: 'e2ccbab743b5407519476986f0c4c7405af6bd6e', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '8f84bff1dfcfac8bf09857447c85d2f134dfab1c' })))));
    }
};
MenuListItem.style = menuListItemCss;

exports.bds_menu_list_item = MenuListItem;
