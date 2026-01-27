import { h } from "@stencil/core";
export class BannerLink {
    constructor() {
        this._buttonClickHandler = () => {
            this.bdsBannerLink.emit(this.el);
            window.open(this.link, `_${this.target}`);
        };
        this.link = undefined;
        this.target = 'blank';
        this.dataTest = null;
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.bdsBannerLink.emit(this.el);
            window.open(this.link, `_${this.target}`);
        }
    }
    render() {
        const Element = 'a';
        return (h(Element, { key: 'c8568adcbe7eb31b2bcf5ac88f08357a950d30c5', class: { banner__link: true }, onClick: () => this._buttonClickHandler(), "data-test": this.dataTest, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("slot", { key: 'eaaa13f59a5662c02459cbb12cb1cfa78c5a1120' })));
    }
    static get is() { return "bds-banner-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["banner-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["banner-link.css"]
        };
    }
    static get properties() {
        return {
            "link": {
                "type": "string",
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
                    "text": "Set the link pass."
                },
                "attribute": "link",
                "reflect": false
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "targets",
                    "resolved": "\"blank\" | \"framename\" | \"parent\" | \"self\" | \"top\"",
                    "references": {
                        "targets": {
                            "location": "local",
                            "path": "D:/whitewall/blip-ds/src/components/banner/banner-link/banner-link.tsx",
                            "id": "src/components/banner/banner-link/banner-link.tsx::targets"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the link pass."
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "'blank'"
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
    static get events() {
        return [{
                "method": "bdsBannerLink",
                "name": "bdsBannerLink",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
