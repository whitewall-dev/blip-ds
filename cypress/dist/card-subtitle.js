import { h } from "@stencil/core";
export class CardSubtitle {
    constructor() {
        this.text = undefined;
    }
    render() {
        return (h("bds-typo", { key: '27b953c62bb282ef0aba9e2434a0a6fb730ebf31', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
    static get is() { return "bds-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "text": {
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
                    "text": "Set the card subtitle."
                },
                "attribute": "text",
                "reflect": false
            }
        };
    }
}
