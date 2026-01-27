'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');
const positionElement = require('./position-element-5e60b3c4.js');
const validations = require('./validations-b373587c.js');

const selectCss = ":host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 7px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;line-height:22px;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-ghost, rgb(140, 140, 140));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.select{position:relative;outline:none}.select__icon{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.select__options{background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:200px;overflow-y:auto}.inside-input-left::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.inside-input-left::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}";
const BdsSelectChipsStyle0 = selectCss;

const SelectChips = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsChange = index.createEvent(this, "bdsChange", 7);
        this.bdsCancel = index.createEvent(this, "bdsCancel", 7);
        this.bdsFocus = index.createEvent(this, "bdsFocus", 7);
        this.bdsBlur = index.createEvent(this, "bdsBlur", 7);
        this.bdsChangeChips = index.createEvent(this, "bdsChangeChips", 7);
        this.bdsSelectChipsInput = index.createEvent(this, "bdsSelectChipsInput", 7);
        this.bdsSubmit = index.createEvent(this, "bdsSubmit", 7);
        this.handleChangeChipsValue = async () => {
            await this.resetFilterOptions();
        };
        this.refDropdown = (el) => {
            this.dropElement = el;
        };
        this.refIconDrop = (el) => {
            this.iconDropElement = el;
        };
        this.toggle = () => {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        this.handler = async (event) => {
            const { detail: { value }, } = event;
            this.selectedOption = value;
            const text = this.getText(value);
            await this.addChip(text);
            this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
            this.bdsChange.emit({ data: this.selectedOptions });
            this.toggle();
        };
        this.handlerNewOption = async (text) => {
            await this.addChip(text);
            this.toggle();
        };
        this.getText = (value) => {
            const el = this.childOptions.find((option) => option.value === value);
            return this.getTextFromOption(el);
        };
        this.getTextFromOption = (opt) => {
            if (this.internalOptions) {
                const internalOption = this.internalOptions.find((option) => option.value == opt?.value);
                if (internalOption) {
                    return internalOption.label;
                }
            }
            return opt?.titleText ? opt.titleText : (opt?.textContent?.trim() ?? '');
        };
        this.setFocusWrapper = () => {
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.removeFocusWrapper = () => {
            this.nativeInput.blur();
        };
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.onFocus = () => {
            this.bdsFocus.emit();
            this.isPressed = true;
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsSelectChipsInput.emit(ev);
            this.changedInputValue();
        };
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    if (this.canAddNew !== false) {
                        this.handleDelimiters();
                        this.setChip(this.value);
                        this.value = '';
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
                        this.bdsChange.emit({ data: this.selectedOptions });
                    }
                    if (!this.disabled) {
                        this.isOpen = true;
                    }
                    break;
                case 'ArrowDown':
                    if (!this.disabled) {
                        this.isOpen = true;
                    }
                    break;
                case 'ArrowUp':
                    if (!this.disabled) {
                        this.isOpen = false;
                    }
                    break;
                case 'Backspace' :
                    if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
                        this.removeLastChip();
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
                        this.bdsChange.emit({ data: this.selectedOptions });
                    }
                    break;
            }
        };
        this.changedInputValue = async () => {
            this.value = this.nativeInput.value;
            if (this.nativeInput.value) {
                await this.filterOptions(this.nativeInput.value);
            }
            else {
                await this.resetFilterOptions();
            }
            if (this.value && this.isOpen === false) {
                this.isOpen = true;
            }
        };
        this.internalOptions = undefined;
        this.isOpen = false;
        this.intoView = null;
        this.selectedOptions = [];
        this.validationDanger = false;
        this.isPressed = false;
        this.validationMesage = '';
        this.internalChips = [];
        this.selectedOption = undefined;
        this.options = undefined;
        this.chips = [];
        this.newPrefix = '';
        this.value = '';
        this.danger = false;
        this.success = false;
        this.maxlength = undefined;
        this.errorMessage = '';
        this.disabled = false;
        this.label = '';
        this.icon = '';
        this.duplicated = false;
        this.canAddNew = true;
        this.notFoundMessage = 'No results found';
        this.type = 'text';
        this.delimiters = /,|;/;
        this.disableSubmit = false;
        this.helperMessage = '';
        this.successMessage = '';
        this.inputName = '';
        this.placeholder = '';
        this.optionsPosition = 'auto';
        this.height = undefined;
        this.maxHeight = undefined;
        this.dataTest = null;
    }
    isOpenChanged(isOpen) {
        if (this.positionHeightDrop == 'bottom') {
            this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
        }
        else {
            this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
        }
        if (isOpen)
            if (this.optionsPosition != 'auto') {
                this.setDefaultPlacement(this.optionsPosition);
            }
            else {
                this.validatePositionDrop();
            }
    }
    handleWindow(ev) {
        if (!this.el.contains(ev.target)) {
            this.isOpen = false;
        }
    }
    optionsChanged() {
        if (typeof this.options === 'string') {
            try {
                this.internalOptions = JSON.parse(this.options);
            }
            catch (e) { }
        }
        else {
            this.internalOptions = this.options;
        }
    }
    /**
     * Call change event before alter chips values.
     */
    valueChanged() {
        if (this.chips) {
            if (typeof this.chips === 'string') {
                try {
                    this.internalChips = JSON.parse(this.chips);
                }
                catch {
                    this.internalChips = [];
                }
            }
            else {
                this.internalChips = this.chips;
            }
        }
        else {
            this.internalChips = [];
        }
    }
    internalValueChanged() {
        this.handleChangeChipsValue();
        if (this.internalChips.length > 0) {
            this.selectedOptions = this.internalChips.map((item) => {
                return {
                    label: item,
                    value: `${this.validValueChip(item, this.childOptions)}`,
                };
            });
        }
    }
    validValueChip(value, internalOptions) {
        const selectOption = internalOptions?.find((option) => option.textContent == value);
        return `${selectOption ? selectOption.value : value}`;
    }
    /**
     * Return the validity of the input chips.
     */
    async isValid() {
        return this.validateChips();
    }
    /**
     * Return the chips
     */
    async getChips() {
        return this.internalChips;
    }
    /**
     * Clear all chips
     */
    async clear() {
        this.internalChips = [];
        this.value = '';
    }
    async add(value) {
        this.handleDelimiters();
        if (value) {
            this.setChip(value);
        }
        else {
            this.setChip(this.value);
        }
        this.value = '';
    }
    async setFocus() {
        this.nativeInput.focus();
    }
    async removeFocus() {
        this.nativeInput.blur();
    }
    componentWillLoad() {
        this.valueChanged();
        this.optionsChanged();
        this.intoView = positionElement.getScrollParent(this.el);
    }
    async componentDidLoad() {
        await this.resetFilterOptions();
        if (this.optionsPosition != 'auto') {
            this.setDefaultPlacement(this.optionsPosition);
        }
        else {
            this.validatePositionDrop();
        }
    }
    setDefaultPlacement(value) {
        if (value == 'bottom') {
            this.dropElement.classList.add('select__options--position-bottom');
            this.iconDropElement.name = 'arrow-down';
        }
        else {
            this.dropElement.classList.add('select__options--position-top');
            this.iconDropElement.name = 'arrow-up';
        }
    }
    validatePositionDrop() {
        const positionValue = positionElement.positionAbsoluteElement({
            actionElement: this.el,
            changedElement: this.dropElement,
            intoView: this.intoView,
        });
        this.positionHeightDrop = positionValue.y;
        if (positionValue.y == 'bottom') {
            this.dropElement.classList.add('select__options--position-bottom');
            this.iconDropElement.name = 'arrow-down';
        }
        else {
            this.dropElement.classList.add('select__options--position-top');
            this.iconDropElement.name = 'arrow-up';
        }
    }
    async connectedCallback() {
        for (const option of this.childOptions) {
            option.addEventListener('optionSelected', this.handler);
        }
    }
    get childOptionsEnabled() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'))
            : Array.from(this.el.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'));
    }
    get childOptions() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'))
            : Array.from(this.el.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'));
    }
    async filterOptions(term) {
        if (!term) {
            await this.resetFilterOptions();
            return;
        }
        for (const option of this.childOptions) {
            const isExistsChip = this.existsChip(option.textContent, await this.getChips());
            const optionTextLower = option.textContent.toLowerCase();
            const termLower = term.toLowerCase();
            if (isExistsChip) {
                option.setAttribute('invisible', 'invisible');
            }
            if (term && optionTextLower.includes(termLower) && !isExistsChip) {
                option.removeAttribute('invisible');
            }
            if (term && !optionTextLower.includes(termLower) && !isExistsChip) {
                option.setAttribute('invisible', 'invisible');
            }
        }
    }
    async resetFilterOptions() {
        for (const option of this.childOptions) {
            if (this.existsChip(option.textContent, await this.getChips())) {
                option.setAttribute('invisible', 'invisible');
            }
            else {
                option.removeAttribute('invisible');
            }
        }
    }
    existsChip(optionChip, chips) {
        return chips.some((chip) => optionChip === chip);
    }
    enableCreateOption() {
        return !!(this.childOptionsEnabled.length === 0 && this.nativeInput && this.nativeInput.value);
    }
    async addChip(chip) {
        await this.setChip(chip);
        this.nativeInput.value = '';
    }
    validateChips() {
        if (this.type === 'email') {
            return !this.internalChips.some((chip) => !this.validateChip(chip));
        }
        else {
            return true;
        }
    }
    handleOnBlur() {
        this.bdsBlur.emit();
        this.isPressed = false;
    }
    verifyAndSubstituteDelimiters(value) {
        if (value.length === 1 && value[0].match(this.delimiters)) {
            return '';
        }
        let newValue = value.replace(/;/g, ',').replace(/\,+|;+/g, ',');
        if (newValue[0].match(this.delimiters)) {
            newValue = newValue.substring(1);
        }
        return newValue;
    }
    handleDelimiters() {
        const value = this.nativeInput.value;
        this.value = value ? value.trim() : '';
        if (value.length === 0)
            return;
        const existTerm = value.match(this.delimiters);
        if (!existTerm)
            return;
        const newValue = this.verifyAndSubstituteDelimiters(value);
        if (!newValue) {
            this.clearInputValues();
            return;
        }
        const words = newValue.split(this.delimiters);
        words.forEach((word) => {
            this.setChip(word.trimStart());
        });
        this.clearInputValues();
    }
    async handleChange(event) {
        const { detail: { value }, } = event;
        this.value = value ? value.trim() : '';
        if (value.length === 0)
            return;
        const existTerm = value.match(this.delimiters);
        if (!existTerm)
            return;
        const newValue = this.verifyAndSubstituteDelimiters(value);
        if (!newValue) {
            this.clearInputValues();
            return;
        }
        const words = newValue.split(this.delimiters);
        words.forEach((word) => {
            this.setChip(word);
        });
        this.clearInputValues();
    }
    clearInputValues(value = '') {
        this.nativeInput.value = value;
        this.value = value;
    }
    setChip(name) {
        if (!this.duplicated) {
            const exists = this.internalChips.some((chip) => chip.toLowerCase() === name.toLowerCase());
            if (exists)
                return;
        }
        if (!validations.whitespaceValidation(name)) {
            return;
        }
        this.internalChips = [...this.internalChips, name];
    }
    validateChip(name) {
        const trimmedName = name.trim();
        if (this.type === 'email' && validations.emailValidation(trimmedName)) {
            return false;
        }
        return true;
    }
    removeLastChip() {
        this.internalChips = this.internalChips.slice(0, this.internalChips.length - 1);
    }
    removeChip(event) {
        const { detail: { id }, } = event;
        this.internalChips = this.internalChips.filter((_chip, index) => index.toString() !== id);
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
        this.bdsChange.emit({ data: this.selectedOptions });
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index$1) => {
            const id = index$1.toString();
            const limit = 30;
            if (chip.length <= limit) {
                return (index.h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, chip));
            }
            else {
                return (index.h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, index.h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, `${chip.slice(0, limit)} ...`)));
            }
        });
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
    generateKey(value) {
        return value.toLowerCase().replace(/ /g, '-');
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        let internalOptions = [];
        if (this.options) {
            if (typeof this.options === 'string') {
                try {
                    internalOptions = JSON.parse(this.options);
                }
                catch (e) { }
            }
            else {
                internalOptions = this.options;
            }
        }
        return (index.h("div", { key: '0c7d83fe556161e74a5a195210beed706ed388d9', class: "select", tabindex: "0", onFocus: this.setFocusWrapper, onBlur: this.removeFocusWrapper }, index.h("div", { key: '760b54d041c00383347d0295a51ad1b428d24076', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null, onClick: this.toggle }, index.h("div", { key: '7d46bc3a2eb35e08cf7cdd4dc8a867f833f883b4', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper }, this.renderIcon(), index.h("div", { key: '95a894a11a4d14b301a0d22cc4a69bbfb0b9b549', class: "input__container" }, this.renderLabel(), index.h("div", { key: '05440fc98d044221f20ae71254b251fd2d965d0d', class: { input__container__wrapper: true } }, this.internalChips.length > 0 && (index.h("span", { key: '7e5668e323ff4711ff0ce3d9d768a8107edbbcd6', style: { height: this.height, maxHeight: this.maxHeight }, class: "inside-input-left" }, this.renderChips())), index.h("input", { key: 'af666e03084c213f6e8e57bc342f0e7f3b8d1707', ref: (input) => (this.nativeInput = input), class: { input__container__text: true }, name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper }))), index.h("div", { key: 'cc70e0c956f95790e40dd8a5c14333687dcf6886', class: "select__icon" }, index.h("bds-icon", { key: 'a638e77198572e567b7f0e64bc47b1ca62544d53', ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && index.h("bds-icon", { key: 'e22f44a71d8e2edda2f8f6d88939ca12868c40f7', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), index.h("div", { key: '74378056158ef8f84c60ef2e02eb50ab59afb8f2', ref: (el) => this.refDropdown(el), class: {
                select__options: true,
                'select__options--open': this.isOpen,
            } }, internalOptions.map((option) => (index.h("bds-select-option", { key: this.generateKey(option.value), onOptionSelected: this.handler, value: option.value, status: option.status }, option.label))), index.h("slot", { key: 'fbee6ee7564d5fe4e44d7710fcc825557b8f900c' }), this.canAddNew === true && this.enableCreateOption() && (index.h("bds-select-option", { key: '7d67f0e43ed95b3b0bf1e7deabe542fa268c6302', id: "option-add", value: "add", onClick: () => this.handlerNewOption(this.nativeInput.value) }, this.newPrefix, this.nativeInput.value)), !this.canAddNew && this.enableCreateOption() && (index.h("bds-select-option", { key: '78f2802c69fa75de96d1f6a6eb5b68dd2c2d4bb0', id: "no-option", value: "add" }, this.notFoundMessage)))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"],
        "options": ["optionsChanged"],
        "chips": ["valueChanged"],
        "internalChips": ["internalValueChanged"]
    }; }
};
SelectChips.style = BdsSelectChipsStyle0;

exports.bds_select_chips = SelectChips;
