import { h, Host } from "@stencil/core";
export class Table {
    render() {
        return (h(Host, { key: '364082094ee5475fd0e04a19e2d4949cfaaff5bb', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '0a1897205bac89066474c78855873546324395e5', class: "bds-table" }, h("slot", { key: '201d08c50a54a44641e595184eb7a15c7acd714e' }))));
    }
    static get is() { return "bds-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table.css"]
        };
    }
    static get properties() {
        return {
            "scrollable": {
                "type": "boolean",
                "attribute": "scrollable",
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
                    "text": "Specifies whether the table is scrollable or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "collapse": {
                "type": "boolean",
                "attribute": "collapse",
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
                    "text": "Specifies whether the table is scrollable or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "denseTable": {
                "type": "boolean",
                "attribute": "dense-table",
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
                    "text": "Determines if the table has a higher content density, typically resulting in more compact rows and cells."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
}
