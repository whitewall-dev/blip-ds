import { r as registerInstance, h } from './index-4a97732a.js';

const cardFooterCss = ":host{width:100%}";
const BdsCardFooterStyle0 = cardFooterCss;

const CardFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.align = 'flex-end';
    }
    render() {
        return (h("bds-grid", { key: '6b507b5abc1d7d00ee5133b372a8626ded3a192e', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", { key: '767c02de2f3f8d44b58a416a00e5464e174a946f' })));
    }
};
CardFooter.style = BdsCardFooterStyle0;

export { CardFooter as bds_card_footer };
