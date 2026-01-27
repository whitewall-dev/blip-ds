'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const tabItemCss = ":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";
const BdsTabItemStyle0 = tabItemCss;

const BdsTabItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabDisabled = index.createEvent(this, "tabDisabled", 7);
        this.numberElement = null;
        this.label = null;
        this.icon = null;
        this.iconPosition = 'left';
        this.iconTheme = 'outline';
        this.badge = false;
        this.badgeShape = 'circle';
        this.badgeColor = 'system';
        this.badgeIcon = null;
        this.badgeAnimation = false;
        this.badgePosition = 'left';
        this.badgeNumber = null;
        this.disable = false;
        this.open = false;
        this.dataTest = null;
    }
    async reciveNumber(number) {
        this.numberElement = number;
    }
    disableChanged() {
        this.tabDisabled.emit({ item: this.numberElement, disable: this.disable });
    }
    render() {
        return (index.h(index.Host, { key: 'f5e25db21beda72edaa0480d376fb2e80a8cf346', class: { [`is-open`]: this.disable === true ? false : this.open } }, index.h("div", { key: '1138fd5d9402c259feac1d7c9b4115ecd3f08e1a', class: { tab_item: true }, "data-test": this.dataTest }, index.h("div", { key: '497364b69f0df50b0327e033f58ce07c75a0e711', class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, index.h("slot", { key: 'b3fe1015106e993a5fd17ef2b533f23f731c7c8d' })))));
    }
    static get watchers() { return {
        "disable": ["disableChanged"]
    }; }
};
BdsTabItem.style = BdsTabItemStyle0;

exports.bds_tab_item = BdsTabItem;
