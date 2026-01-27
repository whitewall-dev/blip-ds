import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '909618a971d2f6ea62c465586423202dd73a420a', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '356270309d0652a59ada08cd8f6f4cadc3687013', xxs: "12", margin: "t-2" }, h("div", { key: '89f6725eb15adabc8f9d4523f9a6d152667e3b00', class: "titulo" }, h("bds-typo", { key: '6f0c8126e206e35e665e22008a03bcd207c94588', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'cfb6921827c4aaafdc5e0d57d42fb09ca2b97797', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '3e458f446f583d1cd5584914e31df7002d781a23', theme: "light" }, h("bds-paper", { key: '2327e58117023e81e285ebe0efabc66979830bb5', elevation: "none", border: true }, h("bds-grid", { key: '964e3d8b3f8647ba1766c8552d29e41eec16e6c7', padding: "2" })))), h("bds-grid", { key: '4d67032ec7b7fd635bd897df7d13df41c7187f29', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '4c6c4d58937e33e172813e37a09732489c7662b7', theme: "dark" }, h("bds-paper", { key: '1c254ef8ef9c78eb7d9b2039ec04e3d0f888b2eb', elevation: "none", border: true }, h("bds-grid", { key: '5b4c6bb1fc980eb5bc892963984343abd351ff08', padding: "2" }))))));
    }
    static get is() { return "bds-test-component"; }
    static get originalStyleUrls() {
        return {
            "$": ["test-component.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["test-component.css"]
        };
    }
}
