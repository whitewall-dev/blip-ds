import { r as registerInstance, c as createEvent, h, H as Host } from './index-4a97732a.js';
import { g as getScrollParent, d as positionElement } from './position-element-060a6274.js';

const menuCss = ".menu{position:fixed;pointer-events:none;top:0;left:0;padding:2px;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);width:240px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}";
const BdsMenuStyle0 = menuCss;

const BdsMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsToggle = createEvent(this, "bdsToggle", 7);
        this.refMenuElement = (el) => {
            this.menuElement = el;
        };
        this.onClickCloseButtom = (event) => {
            this.open = false;
            event.stopPropagation();
        };
        this.refElement = null;
        this.intoView = null;
        this.menupositionTop = 0;
        this.menupositionLeft = 0;
        this.menu = null;
        this.position = 'right';
        this.open = false;
    }
    componentWillLoad() {
        this.refElement = document.getElementById(this.menu);
        this.intoView = getScrollParent(this.refElement);
    }
    async toggle() {
        this.open = !this.open;
    }
    openMenu() {
        this.bdsToggle.emit({ value: this.open });
        if (this.open) {
            const positionValue = positionElement({
                actionElement: this.refElement,
                changedElement: this.menuElement,
                intoView: this.intoView,
            });
            this.menupositionTop = positionValue.top;
            this.menupositionLeft = positionValue.left;
        }
    }
    render() {
        const menuPosition = {
            top: `${this.menupositionTop}px`,
            left: `${this.menupositionLeft}px`,
        };
        return (h(Host, { key: 'dc29f285e82fa013a8f97d37d85aed7bceef98da' }, h("div", { key: '718f4d3d7df44b9f36eca7469d880ae3013684f1', ref: this.refMenuElement, class: {
                menu: true,
                [`menu__${this.position}`]: true,
                [`menu__open`]: this.open,
            }, style: menuPosition }, h("slot", { key: '0dd9c462ee2df3ef76345b60410f052b2dbfdccf' })), this.open && h("div", { key: '608020102f0d432dad7116c61d456ab2c0d791d0', class: { outzone: true }, onClick: (ev) => this.onClickCloseButtom(ev) })));
    }
    static get watchers() { return {
        "open": ["openMenu"]
    }; }
};
BdsMenu.style = BdsMenuStyle0;

export { BdsMenu as bds_menu };
