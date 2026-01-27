import { Host, h } from "@stencil/core";
import messageBallon from "../../assets/svg/message-ballon.svg";
export class BdsLoading {
    constructor() {
        /**Function to transform the svg in a div element. */
        this.formatSvg = (svgContent) => {
            const div = document.createElement('div');
            div.innerHTML = svgContent;
            const svgElm = div.firstElementChild;
            svgElm.removeAttribute('width');
            svgElm.removeAttribute('height');
            return div.innerHTML;
        };
        this.setSvgContent = () => {
            const innerHTML = messageBallon;
            const svg = atob(innerHTML.replace('data:image/svg+xml;base64,', ''));
            this.svgContent = this.formatSvg(svg);
        };
        this.svgContent = undefined;
        this.dataTest = null;
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    render() {
        return (h(Host, { key: '8c72eb87438b0aa1e3cbc85e385003d47e64696b' }, h("div", { key: '15cde81733178c69e71700c1b0a6605fabef4cea', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '7408863a818344eca4dd0c51be265e225d94d953', class: { page_loading: true }, innerHTML: this.svgContent }))));
    }
    static get is() { return "bds-loading-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["loading-page.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["loading-page.css"]
        };
    }
    static get properties() {
        return {
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
            "svgContent": {}
        };
    }
}
