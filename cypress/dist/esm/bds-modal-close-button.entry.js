import { r as registerInstance, h } from './index-DSFaLz79.js';

const modalCloseButtonCss = ".modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}";

const BdsModalCloseButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: 'cdfc7986603336488ea3ae9d704f1afb8bc49dc9', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: 'c7ac8e95bb777ca7d530320da1c7e5ff7bcd7949', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

export { BdsModalCloseButton as bds_modal_close_button };
