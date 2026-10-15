import { Host, h } from "@stencil/core";
export class NavTreeItem {
    constructor() {
        this.navTreeParent = null;
        this.navTreeChild = null;
        this.itensElement = null;
        /**
         * Focus Selected. Used to add title in header accordion.
         */
        this.collapse = 'single';
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * Active. Used to define when the item is highlighted.
         */
        this.isOpen = false;
        /**
         * Loading state. Indicates if the component is in a loading state.
         */
        this.loading = false;
        /**
         * Disable state. Indicates if the component is disabled.
         */
        this.disable = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handler = () => {
            if (!this.loading && !this.disable) {
                if (this.navTreeParent.collapse == 'single') {
                    for (let i = 0; i < this.itensElement.length; i++) {
                        if (this.itensElement[i] != this.element)
                            this.itensElement[i].isOpen = false;
                    }
                }
                this.toggle();
            }
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged(value) {
        this.bdsToogleChange.emit({ value: value, element: this.element });
        // if (this.navTreeChild) this.navTreeChild.isOpen = value;
    }
    componentWillLoad() {
        this.navTreeParent =
            (this.element.parentElement.tagName == 'BDS-NAV-TREE' && this.element.parentElement) ||
                this.element.parentElement;
        this.navTreeChild = this.element.querySelector('bds-nav-tree-item');
    }
    componentWillRender() {
        this.itensElement = this.navTreeParent.getElementsByTagName('bds-nav-tree-item');
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.handler();
        }
    }
    render() {
        return (h(Host, { key: 'a502e0e646128229e8034e82e0fb52e0b0cf4cc8' }, h("div", { key: '7cddfccf9546a6826964f42f831ecbdc339d9c61', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: 'ab9ac59d7d481fa1620438168dc1154acb5f6bcd', class: {
                nav_tree_item: true,
                nav_tree_item_active: this.isOpen,
                nav_tree_item_button: !this.navTreeChild,
                nav_tree_item_button_active: !this.navTreeChild && this.isOpen,
                [`nav_tree_item--loading`]: this.loading,
                [`nav_tree_item--disable`]: this.disable,
            }, onClick: () => this.handler(), "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: '6809a7d5c463c8c2b21d5dbee835d8b28ff10567', class: "nav_tree_item_content" }, this.text && (h("bds-typo", { key: 'bcd806e45a9fa15068579c3f26c09448fac4f350', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: '8a4a91268dca70273d5a101ae577f3101f76c2f7', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: 'a76022e502a989f7efc5fc843fb53f4d6ce3d9e7', class: "nav_tree_item_slot" }, h("slot", { key: 'c8ec5acedf44b0dbbbb07773a4e9131a8f8ad58b', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: '9fd1684c47c12c2e4e0d6761df34c3d38c0fd920', class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            }, name: "arrow-down" })))), this.navTreeChild && (h("div", { key: '94236afcbe868c5bcad4d6ca3bfc93cd9a720106', class: {
                accordion: true,
                accordion_open: this.isOpen,
            } }, h("div", { key: 'abe6da7109b3c2af5631b0591114c9ca9346c5a4', class: "container" }, h("slot", { key: 'aa98b3d8c932c9ff619702511dba74c1b0033ad0' }))))));
    }
    static get is() { return "bds-nav-tree-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nav-tree.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nav-tree.css"]
        };
    }
    static get properties() {
        return {
            "collapse": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "collapses",
                    "resolved": "\"multiple\" | \"single\"",
                    "references": {
                        "collapses": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/nav-tree/nav-tree-item.tsx",
                            "id": "src/components/nav-tree/nav-tree-item.tsx::collapses"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Focus Selected. Used to add title in header accordion."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapse",
                "defaultValue": "'single'"
            },
            "icon": {
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
                    "text": "Icon. Used to add icon in list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text. Used to insert a text in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text"
            },
            "secondaryText": {
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
                    "text": "SecondaryText. Used to insert a secondaryText in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "secondary-text",
                "defaultValue": "null"
            },
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
                    "text": "Active. Used to define when the item is highlighted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "is-open",
                "defaultValue": "false"
            },
            "loading": {
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
                    "text": "Loading state. Indicates if the component is in a loading state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "disable": {
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
                    "text": "Disable state. Indicates if the component is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable",
                "defaultValue": "false"
            },
            "dataTest": {
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "bdsToogleChange",
                "name": "bdsToogleChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "When de activation of component change, the event are dispache."
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
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }];
    }
}
