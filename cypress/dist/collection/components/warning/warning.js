import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '54a20e5091d0993d0072d1c82501a9987c9d2889' }, h("div", { key: 'ca2661cba5d22f18ee166430122db58de2e9bb91', class: "warning__body" }, h("bds-icon", { key: '07738a34489b6c81f71a09f12fa69809269d4400', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '9d91c6b26960112ccf370b4d67951d441a04d7f2', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '0076b756a8b54df3e86b5c61d905ebea7b4cb0c6' })))));
    }
    static get is() { return "bds-warning"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["warning.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["warning.css"]
        };
    }
}
