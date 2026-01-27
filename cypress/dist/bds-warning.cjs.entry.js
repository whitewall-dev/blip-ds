'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#f8fbfb;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";
const BdsWarningStyle0 = warningCss;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '54a20e5091d0993d0072d1c82501a9987c9d2889' }, index.h("div", { key: 'ca2661cba5d22f18ee166430122db58de2e9bb91', class: "warning__body" }, index.h("bds-icon", { key: '07738a34489b6c81f71a09f12fa69809269d4400', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '9d91c6b26960112ccf370b4d67951d441a04d7f2', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '0076b756a8b54df3e86b5c61d905ebea7b4cb0c6' })))));
    }
};
Warning.style = BdsWarningStyle0;

exports.bds_warning = Warning;
