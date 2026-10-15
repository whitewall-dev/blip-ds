'use strict';

var index = require('./index-qGbe2oR8.js');

const sidebarCss = () => `.sidebar_dialog{width:100%;height:100vh;box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));background-color:rgba(0, 0, 0, 0.7);opacity:0;visibility:hidden;transition:opacity 0.3s ease-in-out;display:none}.sidebar_dialog.type_over{position:fixed;top:0;left:0;z-index:80000}.sidebar_dialog.type_over .sidebar{z-index:90000}.sidebar_dialog.type_fixed{width:fit-content;position:relative;height:100%;box-shadow:none}.sidebar_dialog.is_open{display:flex;opacity:1;visibility:visible}.sidebar_dialog .outzone{order:2;width:100%;height:100vh}.sidebar_dialog .sidebar{width:360px;transition:all 0.5s ease-in-out;display:flex;flex-direction:column;background-color:var(--color-surface-2, rgb(237, 237, 237));flex-shrink:0}.sidebar_dialog .sidebar.position_left{order:1}.sidebar_dialog .sidebar.position_right{order:3}.sidebar_dialog .sidebar.background_surface-0{background-color:var(--color-surface-0, rgb(255, 255, 255))}.sidebar_dialog .sidebar.background_surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.sidebar_dialog .sidebar.background_surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.sidebar_dialog .sidebar.background_surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.sidebar_dialog .sidebar.background_surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}.sidebar_dialog .sidebar.type_fixed{width:288px}.sidebar_dialog .sidebar .header{display:flex;align-content:center;justify-content:space-between;padding:24px}.sidebar_dialog .sidebar .header .content{display:flex;width:100%;align-items:center;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.sidebar_dialog .sidebar .header .content ::slotted(*){width:100%}.sidebar_dialog .sidebar .header .closeButton{border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1;cursor:pointer;color:var(--color-content-default, rgb(40, 40, 40))}.sidebar_dialog .sidebar .body{position:relative;flex:1 1 auto}.sidebar_dialog .sidebar .body .content{position:absolute;inset:0;z-index:999999;overflow-y:overlay;overflow-x:clip}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.sidebar_dialog .sidebar .body .margin{padding:8px 24px}.sidebar_dialog .sidebar .footer .content{padding:24px}.sidebar_dialog .sidebar .footer .content ::slotted(*){height:40px;overflow:hidden}.sidebar_dialog .sidebar.is_open.position_left{right:calc(100% - 360px)}.sidebar_dialog .sidebar.is_open.position_right{left:calc(100% - 360px)}`;

const Sidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsToggle = index.createEvent(this, "bdsToggle");
        this.InnerSpacing = 0;
        /**;
         * isOpen. Used to open sidebar.
         */
        this.isOpen = this.type === 'fixed' ? true : false;
        /**
         * sidebar position. Used to position the sidebar. Either on the left or on the right.
         */
        this.sidebarPosition = 'left';
        /**
         * sidebar type. Used to define how open.
         */
        this.type = 'over';
        /**
         * If true, a lateral margin will apear in the content.
         */
        this.margin = true;
        /**
         * Width, number to define sidebar width.
         */
        this.width = 360;
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
        /**
         * Width, number to define sidebar width.
         */
        this.background = 'surface-2';
        this.listiner = (event) => {
            if (event.key == 'Escape' && this.type !== 'fixed') {
                this.isOpen = false;
            }
        };
        this.onClickCloseButtom = () => {
            this.isOpen = false;
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged(newValue) {
        this.bdsToggle.emit({ value: newValue });
        if (newValue === true) {
            document.addEventListener('keyup', this.listiner, false);
        }
        else {
            document.removeEventListener('keyup', this.listiner, false);
        }
    }
    componentWillLoad() {
        this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
        this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
    }
    render() {
        return (index.h("div", { key: '69166f43d5d9d3070f23513bcccefde623270b71', class: {
                sidebar_dialog: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
            } }, this.type === 'over' ? (index.h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), index.h("div", { key: '533c512cec712d8ba6e2e994f1286b31723572be', class: {
                sidebar: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
                [`position_${this.sidebarPosition}`]: true,
                [`background_${this.background}`]: true,
            }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (index.h("div", { key: '4c36ee3dc5ca6a73723493b1fcd4500bbf183bcb', class: { header: true } }, index.h("div", { key: '4253f3b1fcd0dded7737ff51d1de3320c77c2df9', class: { content: true } }, index.h("slot", { key: 'dc95fee8d1e6aab27c6ff4172094e487cbe2137d', name: "header" })), this.type === 'fixed' ? ('') : (index.h("bds-button-icon", { class: {
                closeButton: true,
            }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), index.h("div", { key: '8ca030293969dbae38b0257b9b8a6e909786fe1a', class: { body: true } }, index.h("div", { key: 'a093276aa2e1f3e7d2de3e0476477c520a4e7716', class: { content: true, element_scrolled: true, margin: this.margin } }, index.h("slot", { key: 'dba513d528a710db50c467499e8956759f2bc3f6', name: "body" }))), this.hasFooterSlot && (index.h("div", { key: 'e0e2372e8721661949e9b2886254071279496f3d', class: { footer: true } }, index.h("div", { key: '9cfbb7f32fa60b33d20e5d4361bb48457d6b8e14', class: { content: true } }, index.h("slot", { key: '8445cb54f20e644919847ed4b08f17d644083760', name: "footer" })))))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "isOpen": [{
                "isOpenChanged": 0
            }]
    }; }
};
Sidebar.style = sidebarCss();

exports.bds_sidebar = Sidebar;
