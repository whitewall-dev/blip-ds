import { h } from "@stencil/core";
export class AccordionHeader {
    constructor() {
        this.accordionElement = null;
        this.toggleHeader = () => {
            if (this.isOpen) {
                this.accordionElement?.close();
            }
            else {
                this.accordionElement?.open();
            }
        };
        this.isOpen = false;
        this.btToggleIsfocus = false;
        this.numberElement = null;
        this.accordionTitle = null;
        this.icon = null;
        this.avatarName = null;
        this.avatarThumb = null;
        this.dataTest = null;
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
    componentWillRender() {
        this.accordionElement = this.element.parentElement;
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            if (this.isOpen) {
                this.accordionElement?.close();
            }
            else {
                this.accordionElement?.open();
            }
        }
    }
    render() {
        return (h("div", { key: 'aa23339d986d7c2f05630ffc59ae2e4fd07704fd', onClick: this.toggleHeader, class: { accordion_header: true }, "data-test": this.dataTest }, this.avatarName || this.avatarThumb ? (h("bds-avatar", { name: this.avatarName, thumbnail: this.avatarThumb, size: "extra-small" })) : (this.icon && h("bds-icon", { size: "x-large", name: this.icon, color: "inherit" })), this.accordionTitle && (h("bds-typo", { key: '44b7f3065cd79a1f267e2957bad75a552cab81ba', bold: "bold", variant: "fs-16", "line-height": "double" }, this.accordionTitle)), h("slot", { key: '0802c33c0da12a80096ce5e15f41bffac90bbde3' }), h("bds-icon", { key: '86c9c143ec585c6e825a039470d7efd8c5b8f00e', class: {
                accButton: true,
                accButton__isopen: this.isOpen,
                accButton__isfocus: this.btToggleIsfocus,
            }, size: "x-large", name: "arrow-down", color: "inherit", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) })));
    }
    static get is() { return "bds-accordion-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordion.css"]
        };
    }
    static get properties() {
        return {
            "accordionTitle": {
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
                    "text": "Accordion Title. Used to add title in header accordion."
                },
                "attribute": "accordion-title",
                "reflect": false,
                "defaultValue": "null"
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
                    "text": "Icon. Used to add icon in header accordion."
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarName": {
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
                    "text": "Avatar Name. Used to add avatar in header accordion."
                },
                "attribute": "avatar-name",
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarThumb": {
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
                    "text": "Avatar Thumb. Used to add avatar in header accordion."
                },
                "attribute": "avatar-thumb",
                "reflect": false,
                "defaultValue": "null"
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
                "attribute": "data-test",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "btToggleIsfocus": {},
            "numberElement": {}
        };
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
            },
            "open": {
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
            },
            "close": {
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
}
