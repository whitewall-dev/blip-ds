'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');

const inputPasswordCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input{-webkit-box-shadow:inherit;box-shadow:inherit;width:100%}:host input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.input__password--icon{position:relative;color:var(--color-content-disable, rgb(89, 89, 89));display:-ms-flexbox;display:flex}.input__password--icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px;pointer-events:none}.input__password--icon:focus-visible{outline:none}.input__password--icon:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}";
const BdsInputPasswordStyle0 = inputPasswordCss;

const InputPassword = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsInputPasswordChange = index.createEvent(this, "bdsInputPasswordChange", 7);
        this.bdsInputPasswordInput = index.createEvent(this, "bdsInputPasswordInput", 7);
        this.bdsInputPasswordBlur = index.createEvent(this, "bdsInputPasswordBlur", 7);
        this.bdsInputPasswordFocus = index.createEvent(this, "bdsInputPasswordFocus", 7);
        this.bdsInputPasswordSubmit = index.createEvent(this, "bdsInputPasswordSubmit", 7);
        this.bdsKeyDownBackspace = index.createEvent(this, "bdsKeyDownBackspace", 7);
        this.refNativeInput = (el) => {
            this.nativeInput = el;
        };
        this.toggleEyePassword = () => {
            if (!this.disabled) {
                this.openEyes = !this.openEyes;
            }
        };
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsInputPasswordInput.emit(ev);
        };
        this.onBlur = () => {
            this.bdsInputPasswordBlur.emit();
            this.isPressed = false;
        };
        this.onFocus = () => {
            this.bdsInputPasswordFocus.emit();
            this.isPressed = true;
        };
        this.onSubmit = () => {
            this.bdsInputPasswordSubmit.emit();
        };
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    this.bdsInputPasswordSubmit.emit({ event, value: this.value });
                    break;
                case 'Backspace' :
                    this.bdsKeyDownBackspace.emit({ event, value: this.value });
                    break;
            }
        };
        this.validationDanger = false;
        this.isPressed = false;
        this.validationMesage = '';
        this.openEyes = false;
        this.value = '';
        this.label = '';
        this.inputName = '';
        this.max = undefined;
        this.maxlength = undefined;
        this.min = undefined;
        this.minlength = undefined;
        this.readonly = false;
        this.helperMessage = '';
        this.errorMessage = '';
        this.successMessage = '';
        this.danger = false;
        this.success = false;
        this.icon = '';
        this.disabled = false;
        this.autoCapitalize = 'off';
        this.autoComplete = 'off';
        this.placeholder = '';
        this.dataTest = null;
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.toggleEyePassword();
        }
    }
    getAutoComplete() {
        if (!this.openEyes)
            return 'current-password';
        return this.autoComplete;
    }
    onChange() {
        this.bdsInputPasswordChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    }
    renderIcon() {
        return (this.icon && (index.h("div", { class: {
                input__icon: true,
                'input__icon--large': !!this.label,
            } }, index.h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
    }
    renderLabel() {
        return (this.label && (index.h("label", { class: {
                input__container__label: true,
                'input__container__label--pressed': this.isPressed && !this.disabled,
            } }, index.h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
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
            return (index.h("div", { class: styles, part: "input__message" }, index.h("div", { class: "input__message__icon" }, index.h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), index.h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
        const type = this.openEyes ? 'text' : 'password';
        const autocomplete = this.getAutoComplete();
        return (index.h(index.Host, { key: '4f8ff54c29c87552dad4a7c601dc6f8ba40cd0a8', "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { key: '8beba15e290baa857230b0f7b4372604d6740ff9', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), index.h("div", { key: '3d6745c3e78b74a119cbaf0fb0cfed2376d1fac5', class: "input__container" }, this.renderLabel(), index.h("div", { key: 'f0a572712156474df64775a558956e89cad3ef49', class: { input__container__wrapper: true } }, index.h("input", { key: 'e1607dbf16318c4d019f5b4366f978e3c165c02d', ref: this.refNativeInput, class: { input__container__text: true }, type: type, name: this.inputName, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, autocomplete: autocomplete, autocapitalize: this.autoCapitalize, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onSubmit: this.onSubmit, value: this.value, disabled: this.disabled, "data-test": this.dataTest }))), index.h("div", { key: '73f46d06deb5b26a82b0cef318ca45f3e255badf', class: "input__password--icon", onClick: this.toggleEyePassword, onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }, index.h("bds-icon", { key: '7bec2b30578973d7c1a8fa302aa094a7a0923fe3', size: "small", name: iconPassword, color: "inherit" })), this.success && index.h("bds-icon", { key: 'ea61ac1927c504f130b4d403f3cb91eff715677d', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["onChange"]
    }; }
};
InputPassword.style = BdsInputPasswordStyle0;

exports.bds_input_password = InputPassword;
