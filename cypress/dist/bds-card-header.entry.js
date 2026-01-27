import { r as registerInstance, h } from './index-4a97732a.js';

const cardHeaderCss = ":host{width:100%}";
const BdsCardHeaderStyle0 = cardHeaderCss;

const CardHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.align = 'space-between';
    }
    render() {
        return (h("bds-grid", { key: '50c941f132a8fc8cbd9c4b1706a0d0c2118e7e50', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: 'd26ee87e1486b99797b8c5f9cee44661b7c046f5' })));
    }
};
CardHeader.style = BdsCardHeaderStyle0;

export { CardHeader as bds_card_header };
