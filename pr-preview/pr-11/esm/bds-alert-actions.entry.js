import { r as registerInstance, h } from './index-Cawn__Z9.js';

const alertActionsCss = () => `.alert__actions{width:100%;display:inline-flex;justify-content:flex-end;align-items:center;position:relative;padding:12px 16px;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '9515b5db923454883f96819e0f22a041ea0c19af', class: "alert__actions" }, h("slot", { key: '3d647c77228153d4c87ee547ab7d15e6f3f210a9' })));
    }
};
AlertActions.style = alertActionsCss();

export { AlertActions as bds_alert_actions };
