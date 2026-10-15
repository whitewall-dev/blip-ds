import { h, Host } from "@stencil/core";
export class InputEditable {
    constructor() {
        /**
         * Conditions the element to say whether it is pressed or not, to add styles.
         */
        this.isEditing = false;
        /**
         * Used to block the confirm icon.
         */
        this.isValid = true;
        /**
         * Used to validate it is pressed.
         */
        this.isPressed = false;
        /**
         * Used to validate it is focused.
         */
        this.isFocused = false;
        /**
         * Used to set the error message setted by the internal validators
         */
        this.validationMesage = '';
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Set the component size. Can be one of:
         * 'short' | 'standard' | 'tall';
         */
        this.size = 'standard';
        /**
         * Defines whether the component will be expandable
         */
        this.expand = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Input Name
         */
        this.inputName = '';
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        this.minlength = 0;
        /**
         * Indicated to pass an feeback to user.
         */
        this.errorMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Indicated to pass a help to the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Placeholder for native input element.
         */
        this.placeholder = '';
        /**
         * Add state danger on input, use for use feedback. If true avoid save confirmation.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonEdit is the data-test to button edit.
         */
        this.dtButtonEdit = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonConfirm is the data-test to button confirm.
         */
        this.dtButtonConfirm = null;
        this.handleEditing = () => {
            this.toggleEditing();
        };
        this.toggleEditing = () => {
            this.isEditing = !this.isEditing;
        };
        this.handleSaveText = () => {
            const newValue = this.nativeInput.value;
            if (newValue.length > 0 && newValue.length >= this.minlength && !this.danger) {
                this.bdsInputEditableSave.emit({ value: newValue, oldValue: this.oldValue });
                this.oldValue = newValue;
                this.value = newValue;
                this.toggleEditing();
            }
        };
        this.changedInputValue = async (ev) => {
            const input = ev.target;
            this.checkValidity();
            if (input) {
                if (input.value.length < Number(this.minlength)) {
                    this.isValid = false;
                }
                else {
                    this.isValid = true;
                }
            }
            this.bdsInput.emit(ev);
            this.bdsChange.emit({ value: this.nativeInput.value, oldValue: this.oldValue });
        };
        this.onFocus = () => {
            this.isFocused = true;
            this.isPressed = true;
            this.bdsFocus.emit();
        };
        this.onBlur = () => {
            this.onBlurValidations();
            this.bdsBlur.emit();
            this.isPressed = false;
        };
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.getExpand = () => {
            if (this.expand) {
                return 'expanded';
            }
            else {
                return 'fixed';
            }
        };
    }
    componentWillLoad() {
        this.oldValue = this.value;
    }
    onBlurValidations() {
        this.requiredValidation();
        (this.minlength || this.maxlength) && this.lengthValidation();
        this.checkValidity();
    }
    requiredValidation() {
        if (this.nativeInput.validity.valueMissing) {
            this.validationMesage = this.requiredErrorMessage;
            this.validationDanger = true;
        }
    }
    lengthValidation() {
        if (this.nativeInput.validity.tooShort) {
            this.validationMesage = this.minlengthErrorMessage;
            this.validationDanger = true;
            return;
        }
        if (this.nativeInput.validity.tooLong) {
            this.validationDanger = true;
            return;
        }
    }
    checkValidity() {
        if (this.nativeInput.validity.valid) {
            this.validationDanger = false;
        }
    }
    handleKeyDownToggle(event) {
        if (event.key == 'Enter') {
            this.toggleEditing();
        }
    }
    handleKeyDownSave(event) {
        if (event.key == 'Enter') {
            this.handleSaveText();
        }
    }
    getFontSizeClass() {
        if (this.size == 'short') {
            return 'fs-16';
        }
        else if (this.size == 'standard') {
            return 'fs-24';
        }
        else if (this.size == 'tall') {
            return 'fs-40';
        }
        else {
            return 'fs-24';
        }
    }
    renderMessage() {
        const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
        let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
        if (!message && this.validationDanger)
            message = this.validationMesage;
        const styles = this.danger || this.validationDanger
            ? 'input__message input__message--danger'
            : this.success
                ? 'input__message input__message--success'
                : 'input__message';
        if (message) {
            return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "solid", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    render() {
        const variant = this.getFontSizeClass();
        const inputExpand = this.getExpand();
        return (h(Host, { key: '3f4f8a89d04acab47a1acb3b93c3f1063ed750fe' }, h("div", { key: 'ce31c0988d9ee6ae33a0c539744d5112b214724b', class: "input__editable" }, h("div", { key: '1e6b4836faecd58061769f5d50099479c0507b12', class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, h("bds-typo", { key: '78631e1841018c97bad96df397b73cfa7c246646', tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), h("div", { key: '776f9ccdd9854d81835ef306f24260ba4bdff6b6', class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, h("div", { key: 'a0474b9679ae6c5a07446f0e9f0f5189a8502046', class: { element_input: true, [inputExpand]: true, [this.size]: true } }, h("div", { key: '6ae54bd29859620ddc3ac77553dd92f1ff4469d3', class: {
                input: true,
                select: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--pressed': this.isPressed,
            }, onClick: this.onClickWrapper }, h("div", { key: 'deb85a092e7bab54d13557abdf7432f74a47a493', class: "input__container" }, h("input", { key: 'dad6348b929e6ecbe6be9328bb1604528cd74341', class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && h("bds-icon", { key: '281d4cb08585128143fca4fb1302ce56c10dc543', class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), h("div", { key: 'd530c06f10e767922f70041d4ad6bf63692c2e0b', class: "input__editable--active__icon" }, h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), h("bds-icon", { key: "checkball-icon", class: {
                'input__editable--active__icon--checkball': true,
                'input__editable--active__icon--checkball--error': !this.isValid,
            }, theme: "solid", name: "checkball", onClick: this.handleSaveText, tabindex: "0", onKeyDown: this.handleKeyDownSave.bind(this), dataTest: this.dtButtonConfirm }))))));
    }
    static get is() { return "bds-input-editable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-editable.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-editable.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SizeInputEditable",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "SizeInputEditable": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-editable/input-editable.tsx",
                            "id": "src/components/input-editable/input-editable.tsx::SizeInputEditable"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the component size. Can be one of:\n'short' | 'standard' | 'tall';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'standard'"
            },
            "expand": {
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
                    "text": "Defines whether the component will be expandable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "expand",
                "defaultValue": "false"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            },
            "inputName": {
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
                    "text": "Input Name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
                "defaultValue": "''"
            },
            "requiredErrorMessage": {
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
                    "text": "Error message when input is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
            },
            "minlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength",
                "defaultValue": "0"
            },
            "minlengthErrorMessage": {
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
                    "text": "Error message when the value is lower than the minlength"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "maxlength"
            },
            "errorMessage": {
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
                    "text": "Indicated to pass an feeback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
                "defaultValue": "''"
            },
            "successMessage": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Indicated to pass an feeback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
            },
            "helperMessage": {
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
                    "text": "Indicated to pass a help to the user in complex filling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
                "defaultValue": "''"
            },
            "placeholder": {
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
                    "text": "Placeholder for native input element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
            },
            "danger": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Add state danger on input, use for use feedback. If true avoid save confirmation."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "success": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Add state success on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "success",
                "defaultValue": "false"
            },
            "dtButtonEdit": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonEdit is the data-test to button edit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-edit",
                "defaultValue": "null"
            },
            "dtButtonClose": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            },
            "dtButtonConfirm": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonConfirm is the data-test to button confirm."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-confirm",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "oldValue": {},
            "isEditing": {},
            "isValid": {},
            "isPressed": {},
            "isFocused": {},
            "validationMesage": {},
            "validationDanger": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsInputEditableSave",
                "name": "bdsInputEditableSave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when input text confirm."
                },
                "complexType": {
                    "original": "InputEditableEventDetail",
                    "resolved": "InputEditableEventDetail",
                    "references": {
                        "InputEditableEventDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-editable/input-editable.tsx",
                            "id": "src/components/input-editable/input-editable.tsx::InputEditableEventDetail"
                        }
                    }
                }
            }, {
                "method": "bdsChange",
                "name": "bdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed."
                },
                "complexType": {
                    "original": "InputEditableEventDetail",
                    "resolved": "InputEditableEventDetail",
                    "references": {
                        "InputEditableEventDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-editable/input-editable.tsx",
                            "id": "src/components/input-editable/input-editable.tsx::InputEditableEventDetail"
                        }
                    }
                }
            }, {
                "method": "bdsInput",
                "name": "bdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input has changed."
                },
                "complexType": {
                    "original": "KeyboardEvent",
                    "resolved": "KeyboardEvent",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }, {
                "method": "bdsCancel",
                "name": "bdsCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the selection is cancelled."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsFocus",
                "name": "bdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the select loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsBlur",
                "name": "bdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the select loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
