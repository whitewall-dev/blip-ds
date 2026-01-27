import { r as registerInstance, h } from './index-4a97732a.js';

const cardTitleCss = "";
const BdsCardTitleStyle0 = cardTitleCss;

const CardTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.text = undefined;
    }
    render() {
        return (h("bds-typo", { key: 'f077669a5ed290acef888328dc3308d216906df6', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = BdsCardTitleStyle0;

export { CardTitle as bds_card_title };
