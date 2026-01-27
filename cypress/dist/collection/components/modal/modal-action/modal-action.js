import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '070f9d83349720edb50657f7eb4f4f3b5562c2aa', class: "modal__action" }, h("slot", { key: 'fccfabd1af7f4d2512b44740396ed2bbc91a4a23' })));
    }
    static get is() { return "bds-modal-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-action.css"]
        };
    }
}
