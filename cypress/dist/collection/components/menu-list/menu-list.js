import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'e3f3ca0b83df2ef5b9960cd8d05a1be49bef79d0' }, h("div", { key: 'b443864afd4531f931d2d2b52bda07dc9eaa7971', class: "menu-list" }, h("div", { key: '53a7c52513bb2b3f8ea94db5653874130ee4226a', class: "menu-list__left" }), h("slot", { key: '3f71c5b4ffb945f4097c834fe3da2fff76ba8f0b' }), h("div", { key: '98cff431f9af96c3b4bdb5461d1b0a70fd7c76e3', class: "menu-list__right" }))));
    }
    static get is() { return "bds-menu-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-list.css"]
        };
    }
}
