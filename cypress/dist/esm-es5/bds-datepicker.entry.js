import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-611fd21e.js";import{t as typeDateToStringDate,d as dateToDayList,m as messageTranslate,f as fillDayList,a as defaultStartDate,b as defaultEndDate,c as dateToInputDate,e as dateToTypeDate,g as termTranslate}from"./calendar-6f71cf06.js";import{d as dateValidation}from"./validations-b8451d75.js";import{d as positionElement,g as getScrollParent}from"./position-element-dba422ab.js";var datepickerCss=':host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}.datepicker{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, #1e6bf1)}.datepicker__menu{position:fixed;pointer-events:none;top:0;left:0;background-color:var(--color-surface-1, #f6f6f6);-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__message{padding:8px 16px;border-radius:8px;background-color:var(--color-warning, #fde99b);color:var(--color-content-din, #000000);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:8px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:16px;margin-top:16px;border-top:1px solid var(--color-content-ghost, #8c8c8c)}.datepicker__menu__footer bds-button{margin-left:16px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:28px 1fr 80px 28px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:16px;padding:0 8px}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6);color:var(--color-content-default, #454545);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, #e0e0e0);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, #c9c9c9);box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf);box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf)}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, #636363);color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, #ffffff);width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:transparent}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate .arrow-left{padding-left:8px}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right{padding-right:8px}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:40px;height:40px;text-align:center;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:280px;width:280px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);gap:8px 0}.datepicker__calendar__car__slide__box__day{width:40px;height:40px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:"";position:absolute;inset:4px 0px;background-color:var(--color-primary, #1e6bf1);opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, #454545);border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, #8c8c8c)}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:28px 120px 80px 1fr 28px}.period .datepicker__calendar__selectDate__futureMonth{padding-left:80px;text-align:center;color:var(--color-content-default, #454545)}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:600px}.period .datepicker__calendar__car__slide{left:calc(-50% - 60px)}.period .datepicker__calendar__car__slide__box{margin-left:40px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}';var DatePicker=function(){function e(e){var t=this;registerInstance(this,e);this.bdsStartDate=createEvent(this,"bdsStartDate",7);this.bdsEndDate=createEvent(this,"bdsEndDate",7);this.concludeDatepicker=createEvent(this,"concludeDatepicker",7);this.refActionElement=function(e){t.actionElement=e};this.refMenuElement=function(e){t.menuElement=e};this.refInputSetDate=function(e){t.inputSetDate=e};this.refInputSetEndDate=function(e){t.inputSetEndDate=e};this.refDatepickerPeriod=function(e){t.datepickerPeriod=e};this.refDatepickerSingle=function(e){t.datepickerSingle=e};this.clearDate=function(){t.valueDate=null;t.bdsStartDate.emit({value:null});if(t.typeOfDate=="single"){t.datepickerSingle.clear()}else{t.datepickerPeriod.clear();t.valueEndDate=null;t.bdsEndDate.emit({value:null});setTimeout((function(){var e;(e=t.inputSetDate)===null||e===void 0?void 0:e.setFocus()}),10)}};this.onInputDateSelected=function(e){var i=e.target;t.valueDate=i.value;t.validationDateSelected(t.valueDate)};this.validationDateSelected=function(e){var i=typeDateToStringDate(e);var a=i&&dateToDayList(i);var n=t.startDateLimit&&dateToDayList(t.startDateLimit);var r=t.endDateLimit&&dateToDayList(t.endDateLimit);if(!dateValidation(i)){t.errorMsgDate="".concat(messageTranslate(t.language,"dateFormatIsIncorrect"),"!")}else{if(fillDayList(a)<fillDayList(n)||fillDayList(a)>fillDayList(r)){t.errorMsgDate="".concat(messageTranslate(t.language,"betweenPeriodOf")," ").concat(t.startDateLimit," - ").concat(t.endDateLimit)}else{t.errorMsgDate=null;t.dateSelected=new Date(a.year,a.month,a.date)}}};this.onInputEndDateSelected=function(e){var i=e.target;t.valueEndDate=i.value;t.validationEndDateSelected(t.valueEndDate)};this.validationEndDateSelected=function(e){var i=typeDateToStringDate(e);var a=typeDateToStringDate(t.valueDate);var n=i&&dateToDayList(i);var r=a?dateToDayList(a):dateToDayList(t.startDateLimit);var o=t.endDateLimit&&dateToDayList(t.endDateLimit);if(!dateValidation(i)){t.errorMsgEndDate="".concat(messageTranslate(t.language,"dateFormatIsIncorrect"),"!")}else{if(fillDayList(n)<fillDayList(r)||fillDayList(n)>fillDayList(o)){t.errorMsgEndDate="".concat(messageTranslate(t.language,"betweenPeriodOf")," ").concat(a," - ").concat(t.endDateLimit)}else{t.errorMsgEndDate=null;t.endDateSelected=new Date(n.year,n.month,n.date)}}};this.openDatepicker=function(){if(!t.disabled){var e=positionElement({actionElement:t.actionElement,changedElement:t.menuElement,intoView:t.intoView});t.menupositionTop=e.top;t.menupositionLeft=e.left;t.open=true}};this.clickConcludeDatepicker=function(){var e=t.typeOfDate==="single"?{startDate:typeDateToStringDate(t.valueDate)}:{startDate:typeDateToStringDate(t.valueDate),endDate:typeDateToStringDate(t.valueEndDate)};t.concludeDatepicker.emit(e);t.open=false;if(t.typeOfDate=="period"){t.inputSetEndDate.removeFocus()}};this.onClickCloseButtom=function(){t.open=false};this.onFocusDateSelect=function(){t.stateSelect="start"};this.onFocusEndDateSelect=function(){t.stateSelect="end"};this.open=false;this.stateSelect="start";this.dateSelected=null;this.endDateSelected=null;this.errorMsgDate=null;this.errorMsgEndDate=null;this.intoView=null;this.scrollingTop=0;this.menupositionTop=0;this.menupositionLeft=0;this.valueDate=undefined;this.valueEndDate=undefined;this.typeOfDate="single";this.startDateLimit=defaultStartDate;this.endDateLimit=defaultEndDate;this.label="";this.message=null;this.variantBanner="warning";this.language="pt_BR";this.disabled=false;this.valueDateSelected=null;this.valueEndDateSelected=null;this.dtInputStart=null;this.dtInputEnd=null;this.dtOutzone=null;this.dtButtonPrev=null;this.dtButtonNext=null;this.dtSelectMonth=null;this.dtSelectYear=null;this.dtButtonClear=null;this.dtButtonConfirm=null}e.prototype.valueDateSelectedChanged=function(){this.valueDate=this.valueDateSelected&&dateToInputDate(this.valueDateSelected);if(this.valueDate)this.validationDateSelected(this.valueDate)};e.prototype.valueEndDateSelectedChanged=function(){this.valueEndDate=this.valueEndDateSelected&&dateToInputDate(this.valueEndDateSelected);if(this.valueEndDate)this.validationEndDateSelected(this.valueEndDate)};e.prototype.startDateLimitChanged=function(){if(!dateValidation(this.startDateLimit)){this.startDateLimit=defaultStartDate}};e.prototype.endDateLimitChanged=function(){var e=dateToDayList(this.startDateLimit);var t=dateToDayList(this.endDateLimit);if(!dateValidation(this.endDateLimit)){this.endDateLimit=defaultEndDate}if(fillDayList(t)<fillDayList(e)){this.endDateLimit="".concat(t.date.toString().padStart(2,"0"),"/").concat((t.month+1).toString().padStart(2,"0"),"/").concat(e.year+1)}};e.prototype.dateSelectedChanged=function(){this.stateSelect="end"};e.prototype.componentWillLoad=function(){this.endDateLimitChanged();this.startDateLimitChanged();this.valueDateSelectedChanged();this.valueEndDateSelectedChanged();this.intoView=getScrollParent(this.element);if(this.valueDate)this.validationDateSelected(this.valueDate);if(this.valueEndDate)this.validationEndDateSelected(this.valueEndDate)};e.prototype.whenClickCalendar=function(e){var t;var i=e.detail.value;if(i=="start"){(t=this.inputSetEndDate)===null||t===void 0?void 0:t.setFocus()}};e.prototype.selectDate=function(e){var t=e.detail.value;this.dateSelected=t;this.bdsStartDate.emit({value:this.dateSelected});this.valueDate=this.dateSelected&&dateToTypeDate(this.dateSelected);this.errorMsgDate=null};e.prototype.selectEndDate=function(e){var t=e.detail.value;this.endDateSelected=t;this.bdsEndDate.emit({value:this.endDateSelected});this.valueEndDate=this.endDateSelected&&dateToTypeDate(this.endDateSelected);this.errorMsgEndDate=null};e.prototype.render=function(){var e,t;var i=this;var a={top:"".concat(this.menupositionTop,"px"),left:"".concat(this.menupositionLeft,"px")};return h(Host,null,h("div",{ref:this.refActionElement,class:{datepicker:true}},this.typeOfDate=="single"?h("div",{class:(e={datepicker__inputs:true},e["datepicker__inputs__".concat(this.typeOfDate)]=true,e.datepicker__inputs__open=this.open,e)},h("bds-input",{label:this.label.length>0?this.label:termTranslate(this.language,"setTheDate"),value:this.valueDate,disabled:this.disabled,type:"date",maxlength:10,icon:"calendar",onClick:function(){return i.openDatepicker()},onBdsInput:function(e){return i.onInputDateSelected(e)},danger:this.errorMsgDate?true:false,errorMessage:this.errorMsgDate,dataTest:this.dtInputStart})):h("div",{class:(t={datepicker__inputs:true},t["datepicker__inputs__".concat(this.typeOfDate)]=true,t.datepicker__inputs__open=this.open,t)},h("bds-input",{ref:this.refInputSetDate,label:termTranslate(this.language,"from"),value:this.valueDate,disabled:this.disabled,type:"date",maxlength:10,icon:"calendar",onClick:function(){return i.openDatepicker()},onFocus:function(){return i.onFocusDateSelect()},onBdsInput:function(e){return i.onInputDateSelected(e)},danger:this.errorMsgDate?true:false,errorMessage:this.errorMsgDate,dataTest:this.dtInputStart}),h("bds-input",{ref:this.refInputSetEndDate,label:termTranslate(this.language,"to"),value:this.valueEndDate,disabled:this.disabled||!this.dateSelected,type:"date",maxlength:10,icon:"calendar",onClick:function(){return i.openDatepicker()},onFocus:function(){return i.onFocusEndDateSelect()},onBdsInput:function(e){return i.onInputEndDateSelected(e)},danger:this.errorMsgEndDate?true:false,errorMessage:this.errorMsgEndDate,dataTest:this.dtInputEnd})),h("div",{ref:this.refMenuElement,class:{datepicker__menu:true,datepicker__menu__open:this.open},style:a},this.message&&h("bds-grid",{margin:"b-2"},h("bds-banner",{variant:this.variantBanner,context:"inside"},this.message)),this.typeOfDate=="single"?h("bds-datepicker-single",{ref:this.refDatepickerSingle,startDate:this.startDateLimit&&dateToDayList(this.startDateLimit),endDate:this.endDateLimit&&dateToDayList(this.endDateLimit),dateSelect:this.dateSelected,onBdsDateSelected:function(e){return i.selectDate(e)},language:this.language,dtButtonPrev:this.dtButtonPrev,dtButtonNext:this.dtButtonNext,dtSelectMonth:this.dtSelectMonth,dtSelectYear:this.dtSelectYear}):h("bds-datepicker-period",{ref:this.refDatepickerPeriod,startDate:this.startDateLimit&&dateToDayList(this.startDateLimit),endDate:this.endDateLimit&&dateToDayList(this.endDateLimit),startDateSelect:this.dateSelected,stateSelect:this.stateSelect,endDateSelect:this.endDateSelected,onBdsStartDate:function(e){return i.selectDate(e)},onBdsEndDate:function(e){return i.selectEndDate(e)},onBdsClickDayButton:function(e){return i.whenClickCalendar(e)},language:this.language,dtButtonPrev:this.dtButtonPrev,dtButtonNext:this.dtButtonNext,dtSelectMonth:this.dtSelectMonth,dtSelectYear:this.dtSelectYear}),h("div",{class:{datepicker__menu__footer:true}},h("bds-button",{variant:"secondary",onClick:function(){return i.clearDate()},dataTest:this.dtButtonClear},termTranslate(this.language,"reset")),h("bds-button",{onClick:this.clickConcludeDatepicker,dataTest:this.dtButtonConfirm},termTranslate(this.language,"conclude"))))),this.open&&h("div",{class:{outzone:true},onClick:function(){return i.onClickCloseButtom()},"data-test":this.dtOutzone}))};Object.defineProperty(e.prototype,"element",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{valueDateSelected:["valueDateSelectedChanged"],valueEndDateSelected:["valueEndDateSelectedChanged"],startDateLimit:["startDateLimitChanged"],endDateLimit:["endDateLimitChanged"],dateSelected:["dateSelectedChanged"]}},enumerable:false,configurable:true});return e}();DatePicker.style=datepickerCss;export{DatePicker as bds_datepicker};