import { r as registerInstance, h, H as Host, g as getElement } from './index-Cawn__Z9.js';

const navbarCss = () => `:host{display:flex}:host(.horizontal){width:100%;height:fit-content}:host(.vertical){width:fit-content;height:100%}.navbar{width:fit-content;display:flex;gap:8px;box-sizing:border-box}.navbar ::slotted(*){display:flex;gap:8px;align-items:center}.navbar__justify-content__flex-start{justify-content:flex-start}.navbar__justify-content__center{justify-content:center}.navbar__justify-content__flex-end{justify-content:flex-end}.navbar__justify-content__space-between{justify-content:space-between}.navbar__justify-content__space-around{justify-content:space-around}.navbar__justify-content__space-evenly{justify-content:space-evenly}.navbar__orientation__horizontal{flex-direction:row;width:100%;padding:8px 16px}.navbar__orientation__horizontal ::slotted(*){flex-direction:row}.navbar__orientation__vertical{flex-direction:column;height:100%;padding:16px 8px}.navbar__orientation__vertical ::slotted(*){flex-direction:column}.navbar__background-color__surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.navbar__background-color__surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.navbar__background-color__surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.navbar__background-color__surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}`;

const Navbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Navbar orientation. Used to orientation the navbar. Either on the left or on the right.
         */
        this.orientation = 'vertical';
        /**
         * Width, number to define navbar width.
         */
        this.backgroundColor = 'surface-1';
        /**
         * Justify Content. Used to align itens in navbar.
         */
        this.justifyContent = 'space-between';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: '36cca0c4ec6ea545480f52e0270f437228782839', class: { [`${this.orientation}`]: true } }, h("div", { key: '8db37d28f331ab0cf9200397ba1a87ae89f4a335', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: 'ae02b5f18e593e465bc7997345c1c197f46038f7' }))));
    }
    get hostElement() { return getElement(this); }
};
Navbar.style = navbarCss();

export { Navbar as bds_navbar };
