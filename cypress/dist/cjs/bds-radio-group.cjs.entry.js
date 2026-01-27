'use strict';

var index = require('./index-Bo6hPufM.js');

const RadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsRadioGroupChange = index.createEvent(this, "bdsRadioGroupChange");
        this.radioGroupElement = null;
        this.chagedOptions = (value, event) => {
            if (event.detail.checked == true) {
                this.value = value;
            }
        };
    }
    valueChanged(value) {
        this.setSelectedRadio(value);
        this.bdsRadioGroupChange.emit({ value });
    }
    componentWillRender() {
        this.radioGroupElement = this.element.getElementsByTagName('bds-radio');
        for (let i = 0; i < this.radioGroupElement.length; i++) {
            this.radioGroupElement[i].addEventListener('bdsChange', (event) => this.chagedOptions(this.radioGroupElement[i].value, event));
        }
    }
    setSelectedRadio(value) {
        const radios = this.radioGroupElement;
        for (let i = 0; i < radios.length; i++) {
            const getValue = radios[i].value;
            radios[i].checked = false;
            if (radios[i].checked == false && value == getValue) {
                radios[i].checked = true;
            }
        }
    }
    render() {
        return (index.h(index.Host, { key: 'be574c0bd54208114d6f68d065bf010d04c6b455' }, index.h("slot", { key: '3cceb2e78b23a32732a33c48a29685c96054da68' })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};

exports.bds_radio_group = RadioGroup;
