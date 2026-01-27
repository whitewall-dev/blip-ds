'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const cardTitleCss = "";
const BdsCardTitleStyle0 = cardTitleCss;

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.text = undefined;
    }
    render() {
        return (index.h("bds-typo", { key: 'f077669a5ed290acef888328dc3308d216906df6', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = BdsCardTitleStyle0;

exports.bds_card_title = CardTitle;
