'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const tabCss = ".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, rgb(89, 89, 89));border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, rgb(40, 40, 40))}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}";
const BdsTabStyle0 = tabCss;

const Tab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsTabChange = index.createEvent(this, "bdsTabChange", 7);
        this.group = undefined;
        this.label = undefined;
        this.active = false;
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    async onClick() {
        this.bdsTabChange.emit(this.group);
    }
    render() {
        const bold = this.isActive ? 'bold' : 'regular';
        return (index.h(index.Host, { key: 'dc097b98f6b25f052df7052483b7db157126f7ba', class: {
                'bds-tab': true,
                ['bds-tab--selected']: this.isActive,
            }, onClick: this.onClick.bind(this) }, index.h("div", { key: '98503a65a6a9bb53b007cc5d643e293d5bb17cba', class: "bds-tab__text" }, index.h("bds-typo", { key: '6d01d2fe2b75e903e5d7ae3127a22e5668716eaa', variant: "fs-16", bold: bold }, this.label))));
    }
};
Tab.style = BdsTabStyle0;

exports.bds_tab = Tab;
