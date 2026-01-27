/* eslint-disable no-console */
import { h, Host } from "@stencil/core";
import { emailValidation, numberValidation } from "../../utils/validations";
export class Input {
    constructor() {
        /**
         * Tratamento de eventos de pressionamento de tecla (Enter, Backspace, etc).
         */
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    this.bdsSubmit.emit({ event, value: this.value });
                    if (this.isSubmit) {
                        this.clearTextInput();
                        event.preventDefault();
                    }
                    break;
                case 'Backspace' || 'Delete':
                    this.bdsKeyDownBackspace.emit({ event, value: this.value });
                    break;
            }
        };
        /**
         * Função chamada ao digitar no campo de entrada.
         */
        this.onInput = (ev) => {
            this.onBdsInputValidations();
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsInput.emit(ev);
        };
        /**
         * Função chamada ao perder o foco do campo de entrada.
         */
        this.onBlur = () => {
            this.onBlurValidations();
            this.isPressed = false;
            this.bdsOnBlur.emit();
        };
        /**
         * Função chamada ao ganhar o foco do campo de entrada.
         */
        this.onFocus = () => {
            this.isPressed = true;
            this.bdsFocus.emit();
        };
        /**
         * Função chamada ao clicar no campo de entrada.
         */
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        /**
         * Limpa o valor do campo de entrada.
         */
        this.clearTextInput = (ev) => {
            if (!this.readonly && !this.disabled && ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.value = '';
            if (this.nativeInput) {
                this.nativeInput.value = '';
            }
        };
        this.isPressed = false;
        this.isPassword = false;
        this.validationMesage = '';
        this.validationDanger = false;
        this.inputName = '';
        this.type = 'text';
        this.label = '';
        this.placeholder = '';
        this.autoCapitalize = 'off';
        this.autoComplete = 'off';
        this.max = undefined;
        this.maxlength = undefined;
        this.min = undefined;
        this.minlength = undefined;
        this.readonly = false;
        this.required = undefined;
        this.pattern = undefined;
        this.helperMessage = '';
        this.errorMessage = '';
        this.successMessage = '';
        this.icon = '';
        this.disabled = false;
        this.danger = false;
        this.success = false;
        this.value = '';
        this.counterLength = false;
        this.counterLengthRule = null;
        this.isSubmit = false;
        this.isTextarea = false;
        this.rows = 1;
        this.cols = 0;
        this.requiredErrorMessage = undefined;
        this.minlengthErrorMessage = undefined;
        this.minErrorMessage = undefined;
        this.maxErrorMessage = undefined;
        this.emailErrorMessage = undefined;
        this.numberErrorMessage = undefined;
        this.chips = undefined;
        this.dataTest = null;
        this.encode = false;
    }
    /**
     * Define o foco no campo de entrada.
     */
    async setFocus() {
        this.onClickWrapper();
    }
    /**
     * Remove o foco do campo de entrada.
     */
    async removeFocus() {
        this.onBlur();
    }
    /**
     * Retorna o elemento de input do componente.
     */
    async getInputElement() {
        return this.nativeInput;
    }
    /**
     * Verifica se o campo de entrada é válido.
     */
    async isValid() {
        return this.nativeInput.validity.valid;
    }
    /**
     * Limpa o valor do campo de entrada.
     */
    async clear() {
        this.value = '';
    }
    /**
     * Codifica os caracteres especiais para exibição segura (evita injeção de código HTML).
     */
    encodeValue(value) {
        const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g, amp = /&/g, slash = /\//g;
        if (!this.encode)
            return value;
        return (value &&
            value
                .toString()
                .replace(lt, '&lt;')
                .replace(gt, '&gt;')
                .replace(ap, '&#39;')
                .replace(ic, '&#34;')
                .replace(amp, '&amp;')
                .replace(slash, '&#47;'));
    }
    /**
     * Avisa sobre a mudança do valor do campo de entrada.
     */
    valueChanged(newValue) {
        const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
        this.bdsChange.emit({ value: changeValue });
    }
    /**
     * Função que renderiza o ícone dentro do campo de entrada.
     */
    renderIcon() {
        return (this.icon && (h("div", { class: {
                input__icon: true,
                'input__icon--large': !!this.label,
            } }, h("bds-icon", { class: "input__icon--color", size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
    }
    /**
     * Função que renderiza a label do campo de entrada.
     */
    renderLabel() {
        return (this.label && (h("label", { class: {
                input__container__label: true,
                'input__container__label--pressed': this.isPressed && !this.disabled,
            } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
    }
    /**
     * Função que renderiza as mensagens de erro ou sucesso abaixo do campo de entrada.
     */
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
            return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    /**
     * Valida o campo de entrada ao perder o foco.
     */
    onBlurValidations() {
        this.required && this.requiredValidation();
        this.pattern && this.patternValidation();
        (this.minlength || this.maxlength) && this.lengthValidation();
        (this.min || this.max) && this.minMaxValidation();
        this.checkValidity();
    }
    /**
     * Realiza as validações do campo enquanto o usuário digita.
     */
    onBdsInputValidations() {
        this.type === 'email' && this.emailValidation();
        this.type === 'phonenumber' && this.numberValidation();
        this.checkValidity();
    }
    /**
     * Valida o padrão regex do campo.
     */
    patternValidation() {
        const regex = new RegExp(this.pattern);
        this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
    }
    /**
     * Valida se o campo é obrigatório.
     */
    requiredValidation() {
        if (this.nativeInput.validity.valueMissing) {
            this.validationMesage = this.requiredErrorMessage;
            this.validationDanger = true;
        }
    }
    /**
     * Valida o comprimento do texto no campo de entrada.
     */
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
    /**
     * Valida os valores mínimos e máximos do campo de entrada.
     */
    minMaxValidation() {
        if (this.nativeInput.validity.rangeUnderflow) {
            this.validationMesage = this.minErrorMessage;
            this.validationDanger = true;
            return;
        }
        if (this.nativeInput.validity.rangeOverflow) {
            this.validationMesage = this.maxErrorMessage;
            this.validationDanger = true;
            return;
        }
    }
    /**
     * Valida se o campo contém um email válido.
     */
    emailValidation() {
        if (emailValidation(this.nativeInput.value)) {
            this.validationMesage = this.emailErrorMessage;
            this.validationDanger = true;
        }
    }
    /**
     * Valida se o campo contém um número válido.
     */
    numberValidation() {
        if (numberValidation(this.nativeInput.value)) {
            this.validationMesage = this.numberErrorMessage;
            this.validationDanger = true;
        }
    }
    /**
     * Verifica se o campo de entrada é válido.
     */
    checkValidity() {
        if (this.nativeInput.validity.valid) {
            this.validationDanger = false;
        }
    }
    /**
     * Atualiza o valor do campo de entrada após as mudanças.
     */
    componentDidUpdate() {
        if (this.nativeInput && this.value != this.nativeInput.value) {
            this.nativeInput.value = this.value;
        }
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        const Element = this.isTextarea ? 'textarea' : 'input';
        return (h(Host, { key: '77a1d46c87f2b5174cc1fca2703b08a02c4bbae1', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '79d3780e63002167c4ee997b0f68ff8060daa89b', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { key: 'a2c447f1938d60458b3a7190a4b1a21c2c593c90', name: "input-left" }), h("div", { key: 'f8a4c4a7460cfa5643a48306f60c3fef414dd429', class: "input__container" }, this.renderLabel(), h("div", { key: '1c03cd18acb86c289cc55bbda26060a081fa790e', class: { input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips } }, h("slot", { key: '4d8f23af8beb8cf3e0bb8b81a6a5f93db24bc708', name: "inside-input-left" }), h(Element, { key: 'afc2258f440156e78e813193dd8bf13d85e4fb6b', class: { input__container__text: true, input__container__text__chips: this.chips }, ref: (input) => (this.nativeInput = input), rows: this.rows, cols: this.cols, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest }))), this.counterLength && (h("bds-counter-text", { key: '1b7a56f5ade4bd5b4effcda745aa14ec63d5a81c', length: this.value.length, max: this.maxlength, active: isPressed, ...this.counterLengthRule })), this.success && h("bds-icon", { key: 'bcdf7d6d85a7948e6f18cf9f46d422349961c17b', class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { key: 'ec5a250c0a3d5bca3141a365e28a6dbac3868b0d', name: "input-right" })), this.renderMessage()));
    }
    static get is() { return "bds-input"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Nome do input, usado para identifica\u00E7\u00E3o no formul\u00E1rio."
                },
                "attribute": "input-name",
                "reflect": false,
                "defaultValue": "''"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputType",
                    "resolved": "\"date\" | \"email\" | \"number\" | \"password\" | \"phonenumber\" | \"text\"",
                    "references": {
                        "InputType": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o tipo do input (por exemplo, `text`, `password`, etc)."
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'text'"
            },
            "label": {
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
                    "text": "R\u00F3tulo que ser\u00E1 exibido acima do input."
                },
                "attribute": "label",
                "reflect": false,
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
                    "text": "Texto que ser\u00E1 exibido como sugest\u00E3o ou dica no input."
                },
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "''"
            },
            "autoCapitalize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAutocapitalize",
                    "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
                    "references": {
                        "InputAutocapitalize": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutocapitalize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a capitaliza\u00E7\u00E3o autom\u00E1tica do texto (valores poss\u00EDveis: `on`, `off`)."
                },
                "attribute": "auto-capitalize",
                "reflect": false,
                "defaultValue": "'off'"
            },
            "autoComplete": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAutoComplete",
                    "resolved": "\"current-password\" | \"new-password\" | \"off\" | \"on\" | \"username\"",
                    "references": {
                        "InputAutoComplete": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutoComplete"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o comportamento de autocompletar do navegador (valores poss\u00EDveis: `on`, `off`)."
                },
                "attribute": "auto-complete",
                "reflect": false,
                "defaultValue": "'off'"
            },
            "max": {
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
                    "text": "Define o valor m\u00E1ximo permitido para o input."
                },
                "attribute": "max",
                "reflect": false
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
                    "text": "Define o n\u00FAmero m\u00E1ximo de caracteres permitidos no input."
                },
                "attribute": "maxlength",
                "reflect": false
            },
            "min": {
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
                    "text": "Define o valor m\u00EDnimo permitido para o input."
                },
                "attribute": "min",
                "reflect": false
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
                    "text": "Define o n\u00FAmero m\u00EDnimo de caracteres permitidos no input."
                },
                "attribute": "minlength",
                "reflect": false
            },
            "readonly": {
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
                    "text": "Torna o input somente leitura."
                },
                "attribute": "readonly",
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
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
                    "text": "Define se o input \u00E9 obrigat\u00F3rio."
                },
                "attribute": "required",
                "reflect": false
            },
            "pattern": {
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
                    "text": "Define um padr\u00E3o regex que o valor do input deve seguir."
                },
                "attribute": "pattern",
                "reflect": false
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
                    "text": "Mensagem de ajuda exibida abaixo do input."
                },
                "attribute": "helper-message",
                "reflect": false,
                "defaultValue": "''"
            },
            "errorMessage": {
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
                    "text": "Mensagem de erro exibida quando o valor do input \u00E9 inv\u00E1lido."
                },
                "attribute": "error-message",
                "reflect": false,
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
                    "text": "Mensagem exibida quando o valor do input \u00E9 v\u00E1lido."
                },
                "attribute": "success-message",
                "reflect": false,
                "defaultValue": "''"
            },
            "icon": {
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
                    "text": "Nome do \u00EDcone a ser exibido dentro do input."
                },
                "attribute": "icon",
                "reflect": true,
                "defaultValue": "''"
            },
            "disabled": {
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
                    "text": "Define se o input est\u00E1 desabilitado."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Define se o input est\u00E1 em estado de erro."
                },
                "attribute": "danger",
                "reflect": true,
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
                    "text": "Define se o input est\u00E1 em estado de sucesso."
                },
                "attribute": "success",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "O valor atual do input."
                },
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "counterLength": {
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
                    "text": "Define se ser\u00E1 exibido um contador de comprimento de caracteres."
                },
                "attribute": "counter-length",
                "reflect": false,
                "defaultValue": "false"
            },
            "counterLengthRule": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "InputCounterLengthRules",
                    "resolved": "{ warning: CounterTextRule; delete: CounterTextRule; }",
                    "references": {
                        "InputCounterLengthRules": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputCounterLengthRules"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a regra do contador de comprimento de caracteres (min, max, etc)."
                },
                "defaultValue": "null"
            },
            "isSubmit": {
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
                    "text": "Define se o input ser\u00E1 submetido ao pressionar Enter."
                },
                "attribute": "is-submit",
                "reflect": false,
                "defaultValue": "false"
            },
            "isTextarea": {
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
                    "text": "Define se o input \u00E9 uma \u00E1rea de texto (textarea)."
                },
                "attribute": "is-textarea",
                "reflect": false,
                "defaultValue": "false"
            },
            "rows": {
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
                    "text": "Define a quantidade de linhas da \u00E1rea de texto (se for `textarea`)."
                },
                "attribute": "rows",
                "reflect": false,
                "defaultValue": "1"
            },
            "cols": {
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
                    "text": "Define a quantidade de colunas da \u00E1rea de texto (se for `textarea`)."
                },
                "attribute": "cols",
                "reflect": false,
                "defaultValue": "0"
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
                    "text": "Mensagem de erro exibida quando o input n\u00E3o \u00E9 preenchido e \u00E9 obrigat\u00F3rio."
                },
                "attribute": "required-error-message",
                "reflect": false
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o atende ao comprimento m\u00EDnimo."
                },
                "attribute": "minlength-error-message",
                "reflect": false
            },
            "minErrorMessage": {
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o atende ao valor m\u00EDnimo permitido."
                },
                "attribute": "min-error-message",
                "reflect": false
            },
            "maxErrorMessage": {
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o atende ao valor m\u00E1ximo permitido."
                },
                "attribute": "max-error-message",
                "reflect": false
            },
            "emailErrorMessage": {
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o \u00E9 um email v\u00E1lido."
                },
                "attribute": "email-error-message",
                "reflect": false
            },
            "numberErrorMessage": {
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o \u00E9 um n\u00FAmero v\u00E1lido."
                },
                "attribute": "number-error-message",
                "reflect": false
            },
            "chips": {
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
                    "text": "Define se o input ser\u00E1 exibido como chips (um tipo de entrada com m\u00FAltiplos valores)."
                },
                "attribute": "chips",
                "reflect": false
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
                    "text": "Data test \u00E9 a prop para testar especificamente a a\u00E7\u00E3o do componente."
                },
                "attribute": "data-test",
                "reflect": false,
                "defaultValue": "null"
            },
            "encode": {
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
                    "text": ""
                },
                "attribute": "encode",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isPressed": {},
            "isPassword": {},
            "validationMesage": {},
            "validationDanger": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsChange",
                "name": "bdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando o valor do input muda."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsInput",
                "name": "bdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando o input recebe um input (digita\u00E7\u00E3o)."
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
                "method": "bdsOnBlur",
                "name": "bdsOnBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando o input perde o foco."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": "Evento disparado quando o input ganha o foco."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsSubmit",
                "name": "bdsSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando o formul\u00E1rio \u00E9 submetido."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsPatternValidation",
                "name": "bdsPatternValidation",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado para valida\u00E7\u00E3o de padr\u00E3o regex."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsKeyDownBackspace",
                "name": "bdsKeyDownBackspace",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando a tecla \"Backspace\" \u00E9 pressionada."
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
            "setFocus": {
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
                    "text": "Define o foco no campo de entrada.",
                    "tags": []
                }
            },
            "removeFocus": {
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
                    "text": "Remove o foco do campo de entrada.",
                    "tags": []
                }
            },
            "getInputElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLInputElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        }
                    },
                    "return": "Promise<HTMLInputElement>"
                },
                "docs": {
                    "text": "Retorna o elemento de input do componente.",
                    "tags": []
                }
            },
            "isValid": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Verifica se o campo de entrada \u00E9 v\u00E1lido.",
                    "tags": []
                }
            },
            "clear": {
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
                    "text": "Limpa o valor do campo de entrada.",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
}
