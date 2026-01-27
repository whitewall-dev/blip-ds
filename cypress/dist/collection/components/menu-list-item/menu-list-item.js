import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '486cc71c9d69c9bf94c77997eca2dcc38df34680', role: "button" }, h("div", { key: '2e8fafd0983fdda254aed6067e05b79d2cc5a9d2', class: "menu-list-item" }, h("bds-icon", { key: '577fb7b16df9fad82277e9550edd31655ae683e4', color: color, name: this.icon }), h("bds-typo", { key: 'e2ccbab743b5407519476986f0c4c7405af6bd6e', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '8f84bff1dfcfac8bf09857447c85d2f134dfab1c' })))));
    }
    static get is() { return "bds-menu-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-list-item.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "used for add icon in input left. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
}
