'use strict';

var index = require('./index-qGbe2oR8.js');

const modalCss = () => `.modal__dialog{opacity:0;visibility:hidden;width:100%;height:100%;position:fixed;top:0;left:0;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--color-content-din, rgb(0, 0, 0));opacity:0.7}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));padding:32px;display:flex;flex-direction:column;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{position:relative;color:var(--color-content-default, rgb(40, 40, 40));align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .close-button::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.modal__dialog .modal .close-button:focus-visible{outline:none}.modal__dialog .modal .close-button:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.modal__dialog .modal .slot--dynamic{flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:flex}`;

const BdsModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsModalChanged = index.createEvent(this, "bdsModalChanged");
        /**
         * Used to open/close the modal
         */
        this.open = false;
        /**
         * Used to hide or show the close button
         */
        this.closeButton = true;
        /**
         * Used to change the modal heights.
         */
        this.size = 'fixed';
        /**
         * If true, the modal will close clicking outside the component.
         */
        this.outzoneClose = true;
        /**
         * If true, the modal will close keydown Enter.
         */
        this.enterClose = true;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to button close.
         */
        this.dtOutzone = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this.listener = (event) => {
            if (this.enterClose && (event.key == 'Enter' || event.key == 'Escape')) {
                this.toggle();
            }
        };
        this.handleMouseClick = () => {
            this.open = false;
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        };
        this.onClickCloseButtom = () => {
            if (this.outzoneClose === true) {
                this.open = false;
                this.bdsModalChanged.emit({ modalStatus: 'closed' });
            }
        };
    }
    /**
     * Can be used outside to open/close the modal
     */
    async toggle() {
        this.open = !this.open;
        if (this.open) {
            this.bdsModalChanged.emit({ modalStatus: 'opened' });
        }
        else {
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        }
    }
    isOpenChanged() {
        if (this.open) {
            document.addEventListener('keydown', this.listener, false);
        }
        else
            document.removeEventListener('keydown', this.listener, false);
    }
    render() {
        return (index.h("div", { key: 'c9aed12800e55d69be92e78b835d638a7233b53c', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${this.size}`]: true,
            } }, index.h("div", { key: 'd9b1578894b5c2813be590c358038e6adfa900ec', class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }), index.h("div", { key: 'e793fd27e5d2632f414a0c73e8964d7941a12f4c', class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (index.h("bds-icon", { key: '6f02a60881a4f1b04143b5cc7e70f7320c68d0b2', size: "medium", class: "close-button", name: "close", tabindex: "0", onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && index.h("slot", { key: 'c641955d18dddf4f754a9bcd5bd9b7a4a5c224bd' }), this.size !== 'fixed' && (index.h("div", { key: 'cf7a617e313951fd7e84906c27568539485a760c', class: { slot: true, [`slot--${this.size}`]: true } }, index.h("slot", { key: '6dc7005e9255ce5fcc06dc1ca081d8490f18eb8e' }))))));
    }
    static get watchers() { return {
        "open": [{
                "isOpenChanged": 0
            }]
    }; }
};
BdsModal.style = modalCss();

exports.bds_modal = BdsModal;
