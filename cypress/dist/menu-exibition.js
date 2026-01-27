import { h } from "@stencil/core";
export class BdsMenuExibition {
    constructor() {
        this.avatarName = null;
        this.avatarThumbnail = null;
        this.avatarSize = 'standard';
        this.value = null;
        this.subtitle = null;
        this.description = null;
        this.disabled = false;
    }
    render() {
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        return (h("div", { key: 'be984b557e772b4ffbfae4c16e47744f4f0a72c7', class: {
                menuexibition: true,
                [`menuexibition__disabled`]: this.disabled,
            } }, hasAvatar && (h("bds-avatar", { key: 'ef1c82d132c1f0d380e11798155b9f324d3a2cdc', class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: this.avatarSize })), h("div", { key: 'e0b22572406949b55a88ac1de789485ca6351987', class: "content-item" }, this.value && (h("bds-typo", { key: '6b1a62042a1c20f410677c8070443109f9d0e40f', class: "title-item", variant: "fs-16", tag: "span" }, this.value)), this.subtitle && (h("bds-typo", { key: 'c584b31e29959788fce8fb02ff2737bf5db7ab0d', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: 'cf9b57ac3aa22bfe4db0a6997e9bff558f1e55a7', class: "description-item", variant: "fs-10", tag: "span" }, this.description)))));
    }
    static get is() { return "bds-menu-exibition"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-exibition.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-exibition.css"]
        };
    }
    static get properties() {
        return {
            "avatarName": {
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
                    "text": "AvatarName. Used to enter the avatar name."
                },
                "attribute": "avatar-name",
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarThumbnail": {
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
                    "text": "AvatarThumbnail. Used to insert the avatar photo."
                },
                "attribute": "avatar-thumbnail",
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "avatarSize",
                    "resolved": "\"extra-small\" | \"small\" | \"standard\"",
                    "references": {
                        "avatarSize": {
                            "location": "local",
                            "path": "D:/whitewall/blip-ds/src/components/menu/menu-exibition/menu-exibition.tsx",
                            "id": "src/components/menu/menu-exibition/menu-exibition.tsx::avatarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "AvatarSize. Used to set avatar size."
                },
                "attribute": "avatar-size",
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "value": {
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
                    "text": "Value. Used to insert a title in the display item."
                },
                "attribute": "value",
                "reflect": false,
                "defaultValue": "null"
            },
            "subtitle": {
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
                    "text": "Subtitle. Used to insert a subtitle in the display item."
                },
                "attribute": "subtitle",
                "reflect": false,
                "defaultValue": "null"
            },
            "description": {
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
                    "text": "Description. Used to insert a subtitle in the display item."
                },
                "attribute": "description",
                "reflect": false,
                "defaultValue": "null"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disabled. Used to declare that the item will be disabled."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
