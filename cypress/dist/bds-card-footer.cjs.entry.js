'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const cardFooterCss = ":host{width:100%}";
const BdsCardFooterStyle0 = cardFooterCss;

const CardFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.align = 'flex-end';
    }
    render() {
        return (index.h("bds-grid", { key: '6b507b5abc1d7d00ee5133b372a8626ded3a192e', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, index.h("slot", { key: '767c02de2f3f8d44b58a416a00e5464e174a946f' })));
    }
};
CardFooter.style = BdsCardFooterStyle0;

exports.bds_card_footer = CardFooter;
