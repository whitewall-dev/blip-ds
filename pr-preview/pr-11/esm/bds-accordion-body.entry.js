import { r as registerInstance, h } from './index-Cawn__Z9.js';

const accordionCss = () => `.accordion_header{display:flex;grid-auto-flow:column;gap:24px;justify-content:start;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:flex;width:100%;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}`;

const AccordionBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.container = null;
        this.isOpen = false;
        this.isOpenAftAnimation = false;
        this.numberElement = null;
        this.hasDivisor = true;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refContainer = (el) => {
            this.container = el;
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    async divisor(valor) {
        this.hasDivisor = valor;
    }
    isOpenChanged() {
        this.heightContainer = this.isOpen ? this.container.offsetHeight : 0;
        if (this.isOpen) {
            setTimeout(() => {
                this.isOpenAftAnimation = !this.isOpenAftAnimation;
            }, 500);
        }
        else {
            this.isOpenAftAnimation = !this.isOpenAftAnimation;
        }
    }
    render() {
        return (h("div", { key: 'f3147d41f4c3b7dcdf279c8964a5e3d5521a07ee', class: {
                accordion_body: true,
                accordion_body_divisor: this.hasDivisor,
                accordion_body_isOpen: this.isOpenAftAnimation,
            }, style: { height: `${this.heightContainer}px` }, "data-test": this.dataTest }, h("div", { key: '5c37e83ef90800cad27c8994969026b16807ce70', class: "container", ref: (el) => this.refContainer(el) }, h("slot", { key: '88cb4707b781c4f191f14c48632d396f4467c0b4' }))));
    }
    static get watchers() { return {
        "isOpen": [{
                "isOpenChanged": 0
            }]
    }; }
};
AccordionBody.style = accordionCss();

export { AccordionBody as bds_accordion_body };
