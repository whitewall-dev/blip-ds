'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";
const BdsTabPanelStyle0 = tabPanelCss;

const TabPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.group = undefined;
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    render() {
        return (index.h(index.Host, { key: 'f6ffbec3b4b985bcb217b834287b13ac77e8fb7a', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: '170b8466388a6696a047b1b07057e3308c70df71' })));
    }
};
TabPanel.style = BdsTabPanelStyle0;

exports.bds_tab_panel = TabPanel;
