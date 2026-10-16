import { h } from "@stencil/core";
export class Sidebar {
    constructor() {
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
        return (h("div", { key: '69166f43d5d9d3070f23513bcccefde623270b71', class: {
                sidebar_dialog: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
            } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { key: '533c512cec712d8ba6e2e994f1286b31723572be', class: {
                sidebar: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
                [`position_${this.sidebarPosition}`]: true,
                [`background_${this.background}`]: true,
            }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { key: '4c36ee3dc5ca6a73723493b1fcd4500bbf183bcb', class: { header: true } }, h("div", { key: '4253f3b1fcd0dded7737ff51d1de3320c77c2df9', class: { content: true } }, h("slot", { key: 'dc95fee8d1e6aab27c6ff4172094e487cbe2137d', name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
                closeButton: true,
            }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { key: '8ca030293969dbae38b0257b9b8a6e909786fe1a', class: { body: true } }, h("div", { key: 'a093276aa2e1f3e7d2de3e0476477c520a4e7716', class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { key: 'dba513d528a710db50c467499e8956759f2bc3f6', name: "body" }))), this.hasFooterSlot && (h("div", { key: 'e0e2372e8721661949e9b2886254071279496f3d', class: { footer: true } }, h("div", { key: '9cfbb7f32fa60b33d20e5d4361bb48457d6b8e14', class: { content: true } }, h("slot", { key: '8445cb54f20e644919847ed4b08f17d644083760', name: "footer" })))))));
    }
    static get is() { return "bds-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["sidebar.css"]
        };
    }
    static get properties() {
        return {
            "isOpen": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ";\nisOpen. Used to open sidebar."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "is-open",
                "defaultValue": "this.type === 'fixed' ? true : false"
            },
            "sidebarPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "sidebarPosition",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "sidebarPosition": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/sidebar/sidebar.tsx",
                            "id": "src/components/sidebar/sidebar.tsx::sidebarPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sidebar position. Used to position the sidebar. Either on the left or on the right."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sidebar-position",
                "defaultValue": "'left'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "sidebarType",
                    "resolved": "\"fixed\" | \"over\"",
                    "references": {
                        "sidebarType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/sidebar/sidebar.tsx",
                            "id": "src/components/sidebar/sidebar.tsx::sidebarType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sidebar type. Used to define how open."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'over'"
            },
            "margin": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, a lateral margin will apear in the content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin",
                "defaultValue": "true"
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Width, number to define sidebar width."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "360"
            },
            "dtOutzone": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object.\ndtOutzone is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-outzone",
                "defaultValue": "null"
            },
            "dtButtonClose": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            },
            "background": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "sidebarBackground",
                    "resolved": "\"surface-0\" | \"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
                    "references": {
                        "sidebarBackground": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/sidebar/sidebar.tsx",
                            "id": "src/components/sidebar/sidebar.tsx::sidebarBackground"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Width, number to define sidebar width."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "background",
                "defaultValue": "'surface-2'"
            }
        };
    }
    static get states() {
        return {
            "InnerSpacing": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsToggle",
                "name": "bdsToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the isOpen has changed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }];
    }
}
