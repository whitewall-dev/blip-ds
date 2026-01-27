import { r as registerInstance, h } from './index-DSFaLz79.js';

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '070f9d83349720edb50657f7eb4f4f3b5562c2aa', class: "modal__action" }, h("slot", { key: 'fccfabd1af7f4d2512b44740396ed2bbc91a4a23' })));
    }
};
BdsModalAction.style = modalActionCss;

export { BdsModalAction as bds_modal_action };
