'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";
const BdsModalActionStyle0 = modalActionCss;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '070f9d83349720edb50657f7eb4f4f3b5562c2aa', class: "modal__action" }, index.h("slot", { key: 'fccfabd1af7f4d2512b44740396ed2bbc91a4a23' })));
    }
};
BdsModalAction.style = BdsModalActionStyle0;

exports.bds_modal_action = BdsModalAction;
