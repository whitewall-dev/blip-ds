import { r as registerInstance, h, H as Host } from './index-4a97732a.js';

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";
const BdsTabPanelStyle0 = tabPanelCss;

const TabPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.group = undefined;
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    render() {
        return (h(Host, { key: 'f6ffbec3b4b985bcb217b834287b13ac77e8fb7a', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '170b8466388a6696a047b1b07057e3308c70df71' })));
    }
};
TabPanel.style = BdsTabPanelStyle0;

export { TabPanel as bds_tab_panel };
