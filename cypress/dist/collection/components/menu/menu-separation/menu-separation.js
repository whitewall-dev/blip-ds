import { h } from "@stencil/core";
export class BdsMenuSeparation {
    constructor() {
        /**
         * Value. Used to insert a title to the divider.
         */
        this.value = null;
        /**
         * Size. Used to set the size of the divider.
         */
        this.size = null;
    }
    render() {
        return (h("div", { key: 'acc8bc3d54baeca26463db28c3f67958006a2835', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '82816b0dbebf6917872b6ba5d1e6a3e6d909a549', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: 'f9c41f6389a64be26ec677b9a45efae9b7f50262', class: "dividor-item" })));
    }
    static get is() { return "bds-menu-separation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-separation.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-separation.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "Value. Used to insert a title to the divider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
                    "text": "Size. Used to set the size of the divider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
}
