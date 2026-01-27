import { h, Host } from "@stencil/core";
export class Skeleton {
    constructor() {
        this.shape = 'square';
        this.height = '50px';
        this.width = '100%';
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: '904b53964e655f24141cf2d0ec57398c5c2c2774', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, h("bds-grid", { key: '711b1f05e8c4ae9b60d4d12260e01c1e6c384a02', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { key: '3c5f074f4a105a3c4135ad9867eac9abfd6f7a0e', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, h("div", { key: '9fb27c60dad05d69650fa95bca83adaabb34ca62', class: "animation" }))));
    }
    static get is() { return "bds-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["skeleton.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["skeleton.css"]
        };
    }
    static get properties() {
        return {
            "shape": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Shape",
                    "resolved": "\"circle\" | \"square\"",
                    "references": {
                        "Shape": {
                            "location": "local",
                            "path": "D:/whitewall/blip-ds/src/components/skeleton/skeleton.tsx",
                            "id": "src/components/skeleton/skeleton.tsx::Shape"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "shape",
                "reflect": false,
                "defaultValue": "'square'"
            },
            "height": {
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
                    "text": ""
                },
                "attribute": "height",
                "reflect": false,
                "defaultValue": "'50px'"
            },
            "width": {
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
                    "text": ""
                },
                "attribute": "width",
                "reflect": false,
                "defaultValue": "'100%'"
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
}
