import { h } from "@stencil/core";
import { termTranslate } from "./languages";
import background from "../../assets/svg/pattern.svg";
export class BdsUpload {
    constructor() {
        this.validationFiles = (File, index) => {
            const filetype = `.${File.name.split('.').pop()}`;
            const validate = this.internalAccepts.includes(filetype);
            if (validate) {
                this.formatError = false;
                return;
            }
            else {
                this.formatError = true;
                this.deleteFile(index);
                return;
            }
        };
        /**
         * Recive the file data using drag and drop.
         */
        this.handleDrop = (Event) => {
            this.haveFiles = true;
            const dt = Event.dataTransfer;
            const files = dt.files;
            this.handleFiles(files);
        };
        /**
         * Verify if allow the state recive one or more items.
         */
        this.handleFiles = (files) => {
            if (!this.multiple) {
                this.files = [files[0]];
            }
            else {
                this.files = [...this.files, ...files];
            }
            this.bdsUploadChange.emit({ value: this.files });
        };
        this.refInputElement = (el) => {
            this.inputElement = el;
        };
        this.files = [];
        this.haveFiles = false;
        this.hover = false;
        this.background = undefined;
        this.size = [];
        this.internalAccepts = [];
        this.formatError = false;
        this.language = 'pt_BR';
        this.titleName = undefined;
        this.subtitle = undefined;
        this.error = undefined;
        this.multiple = undefined;
        this.accept = undefined;
        this.dataAccept = [];
        this.dtInputFiles = null;
        this.dtLabelAddFile = null;
        this.dtButtonDelete = null;
    }
    dataAcceptChanged() {
        if (this.dataAccept) {
            if (typeof this.dataAccept === 'string') {
                try {
                    this.internalAccepts = JSON.parse(this.dataAccept);
                }
                catch {
                    this.internalAccepts = [];
                }
            }
            else {
                this.internalAccepts = this.dataAccept;
            }
        }
        else {
            this.internalAccepts = [];
        }
    }
    filesChanged() {
        if (this.files.length > 0) {
            for (let i = 0; i < this.files.length; i++) {
                if (this.internalAccepts.length > 0) {
                    this.validationFiles(this.files[i], i);
                }
            }
        }
    }
    formatErrorChanged(value) {
        if (value) {
            this.error = termTranslate(this.language, 'formatError');
            setTimeout(() => (this.error = null), 5000);
        }
    }
    componentWillLoad() {
        this.dataAcceptChanged();
    }
    componentDidLoad() {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
            this.dropArea.shadowRoot.addEventListener(eventName, this.preventDefaults, false);
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(true), false);
        });
        ['dragenter', 'dragover'].forEach((eventName) => {
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.preventDefaults, false);
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(true), false);
        });
        ['dragleave', 'drop'].forEach((eventName) => {
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.preventDefaults, false);
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(false), false);
        });
        this.dropArea.shadowRoot.addEventListener('drop', this.handleDrop, false);
    }
    /**
     * Prevent the screen to reload.
     */
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    /**
     * Definy if are hover to aply styles in drop area.
     */
    hoverFile(boolean) {
        this.hover = boolean;
    }
    /**
     * Recive the file data using click.
     */
    onUploadClick(files) {
        if (files.length > 0) {
            if (!this.multiple) {
                this.files = [files[0]];
            }
            else {
                this.files = [...this.files, ...files];
            }
            this.haveFiles = true;
            this.getSize();
        }
        else {
            return false;
        }
        this.bdsUploadChange.emit({ value: this.files });
    }
    /**
     * Return the size information from the file.
     */
    getSize() {
        this.files.map((size) => {
            const listSize = size.size;
            this.size.push(listSize);
        });
    }
    /**
     * Used for delete a item from the list.
     */
    async deleteFile(index) {
        const fileToDelete = this.files.filter((item, i) => i == index && item);
        this.bdsUploadDelete.emit({ value: fileToDelete });
        this.files.splice(index, 1);
        this.files = [...this.files];
        if (this.files.length === 0) {
            this.haveFiles = false;
        }
        else {
            this.haveFiles = true;
        }
        this.bdsUploadChange.emit({ value: this.files });
    }
    /**
     * Used for delete a item from the list.
     */
    async deleteAllFiles() {
        this.bdsUploadDelete.emit({ value: this.files });
        this.files = [];
        if (this.files.length === 0) {
            this.haveFiles = false;
        }
        else {
            this.haveFiles = true;
        }
        this.bdsUploadChange.emit({ value: this.files });
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.inputElement.click();
        }
    }
    render() {
        return (h("div", { key: 'f451da39e7d5ba01c8926d06aa6ff613ffc97f7f', class: "upload" }, h("div", { key: 'fdf4461aa9389211ca7af0265aa14c257947ffad', class: "upload-header" }, h("bds-icon", { key: '3da4d88fd0a0202b749c589b973d55e2d99ab582', class: "upload-header_icon", size: "xxx-large", name: "upload" }), h("div", { key: 'cf1783a60052be7ba7d938cab30a0e2059012be4', class: "upload-header_text" }, h("bds-typo", { key: '2fbe0ff658d0c3a549058f5238cd24e6269b9fd9', variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), h("bds-typo", { key: 'c3a05f11ae5a9ddfc4edfa62dcccc3215cdaed33', variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles ? (h("div", null, h("div", { class: "list-preview" }, this.files.map((names, index) => (h("div", { class: "upload__preview", key: index, id: "drop-area" }, h("div", { class: "preview", id: "preview" }, h("bds-icon", { size: "x-small", name: "attach" }), h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index}` })))))), this.multiple ? (h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), h("div", { key: '3c285b645e42aadc4d93d9b8a15c4704ae73c7bc', class: { upload__edit: true } }, h("label", { key: '7c2ab65bf96478b62b0e1076cbd70745ecbf4dba', class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("div", { key: 'c02d7cb719613e0574bed20ba6dd7d429b29e7ae', class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), h("img", { key: '00364eac6f6645b2131b9d76886786202c0b92a2', class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: background })), h("input", { key: '19126de1bfb783b556842ac4e82f475e9e231a6a', ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
    }
    static get is() { return "bds-upload"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bds-upload.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bds-upload.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "languages",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "languages": {
                            "location": "import",
                            "path": "./languages",
                            "id": "src/components/upload/languages/index.ts::languages"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the language for fixed texts."
                },
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'pt_BR'"
            },
            "titleName": {
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
                    "text": "Used for add a text on title."
                },
                "attribute": "title-name",
                "reflect": false
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used for add a text on subtitle."
                },
                "attribute": "subtitle",
                "reflect": false
            },
            "error": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used for add a error message. In case a verify."
                },
                "attribute": "error",
                "reflect": true
            },
            "multiple": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to allow upload multiple files."
                },
                "attribute": "multiple",
                "reflect": false
            },
            "accept": {
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
                    "text": "Used to accept a especific type of file."
                },
                "attribute": "accept",
                "reflect": false
            },
            "dataAccept": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string[] | string",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to accept a especific type of file."
                },
                "attribute": "data-accept",
                "reflect": false,
                "defaultValue": "[]"
            },
            "dtInputFiles": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtInputFiles is the data-test to button clear."
                },
                "attribute": "dt-input-files",
                "reflect": false,
                "defaultValue": "null"
            },
            "dtLabelAddFile": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtLabelAddFile is the data-test to button clear."
                },
                "attribute": "dt-label-add-file",
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonDelete": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonDelete is the data-test to button clear."
                },
                "attribute": "dt-button-delete",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "files": {},
            "haveFiles": {},
            "hover": {},
            "background": {},
            "size": {},
            "internalAccepts": {},
            "formatError": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsUploadDelete",
                "name": "bdsUploadDelete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emited when delete a item from the list."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsUploadChange",
                "name": "bdsUploadChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emited when change the value of Upload."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "deleteFile": {
                "complexType": {
                    "signature": "(index: any) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Used for delete a item from the list.",
                    "tags": []
                }
            },
            "deleteAllFiles": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Used for delete a item from the list.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "dropArea"; }
    static get watchers() {
        return [{
                "propName": "dataAccept",
                "methodName": "dataAcceptChanged"
            }, {
                "propName": "files",
                "methodName": "filesChanged"
            }, {
                "propName": "formatError",
                "methodName": "formatErrorChanged"
            }];
    }
}
