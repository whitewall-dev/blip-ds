'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-95fddc3f.js');
const positionElement = require('./position-element-5e60b3c4.js');

const en_US = {
    itemsPerPage: 'Items per page',
    of: 'of',
    items: 'items',
    pages: 'pages'
};
const pt_BR = {
    itemsPerPage: 'Itens por página',
    of: 'de',
    items: 'itens',
    pages: 'páginas'
};
const es_MX = {
    itemsPerPage: 'Itens por página',
    of: 'de',
    items: 'itens',
    pages: 'páginas'
};

const paginationCss = ":host{display:block}:host .actions_select{width:74px}:host(.full_width){width:100%}@media screen and (max-width: 905px){.items_per_page{display:none}.actions{width:100%;-ms-flex-pack:center;justify-content:center}}@media screen and (max-width: 600px){.actions--text{display:none}}";
const BdsPaginationStyle0 = paginationCss;

const Pagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsPaginationChange = index.createEvent(this, "bdsPaginationChange", 7);
        this.bdsItemsPerPageChange = index.createEvent(this, "bdsItemsPerPageChange", 7);
        this.nextPage = (event) => {
            const el = this.value;
            if (el < this.pages) {
                event.preventDefault();
                this.value = this.value + 1;
                this.updateItemRange();
            }
        };
        this.previewPage = (event) => {
            const el = this.value;
            if (el > 1) {
                event.preventDefault();
                this.value = this.value - 1;
                this.updateItemRange();
            }
        };
        this.firstPage = (event) => {
            const el = this.value;
            if (el > 1) {
                event.preventDefault();
                this.value = this.paginationNumbers[0];
                this.updateItemRange();
            }
        };
        this.lastPage = (event) => {
            const el = this.value;
            if (el < this.pages) {
                event.preventDefault();
                this.value = this.pages;
                this.updateItemRange();
            }
        };
        this.openOptions = () => {
            this.openSelect = !this.openSelect;
        };
        this.onBlur = () => {
            this.openSelect = false;
        };
        this.value = this.startedPage;
        this.itemValue = undefined;
        this.openSelect = undefined;
        this.paginationNumbers = [];
        this.itemsPerPage = undefined;
        this.intoView = null;
        this.pages = undefined;
        this.startedPage = undefined;
        this.optionsPosition = 'auto';
        this.pageCounter = false;
        this.itemsPage = undefined;
        this.numberItems = undefined;
        this.language = 'pt_BR';
        this.dtButtonInitial = null;
        this.dtButtonPrev = null;
        this.dtSelectNumber = null;
        this.dtButtonNext = null;
        this.dtButtonEnd = null;
    }
    componentWillLoad() {
        this.countPage();
        this.intoView = positionElement.getScrollParent(this.el);
        this.processItemsPage();
        if (this.pageCounter) {
            this.itemValue = this.itemsPage[0];
        }
        this.itemSelected(this.itemValue);
        this.countItem();
    }
    pagesChanged() {
        this.countPage();
    }
    valueChanged() {
        this.bdsPaginationChange.emit(this.value);
    }
    processItemsPage() {
        if (typeof this.itemsPage === 'string') {
            try {
                this.itemsPage = JSON.parse(this.itemsPage.replace(/'/g, '"'));
            }
            catch (error) {
                this.itemsPage = [];
            }
        }
    }
    countItem() {
        if (this.pageCounter) {
            const pages = this.numberItems / this.itemValue;
            this.pages = Math.ceil(pages);
        }
    }
    countPage() {
        if (this.paginationNumbers.length !== 0) {
            this.paginationNumbers = [];
        }
        if (this.paginationNumbers.length === 0) {
            for (let i = 1; i <= this.pages; i++) {
                this.paginationNumbers.push(i);
            }
            if (this.startedPage && this.startedPage < this.pages) {
                this.value = this.startedPage;
            }
            else {
                this.value = this.paginationNumbers[0];
            }
        }
    }
    optionSelected(index) {
        this.value = index;
        this.openOptions();
        this.updateItemRange();
    }
    itemSelected(index) {
        this.itemValue = index;
        this.itemsPerPage = index;
        this.openOptions();
        this.countItem();
        this.updateItemRange();
        this.bdsItemsPerPageChange.emit(this.itemsPerPage);
    }
    updateItemRange() {
        this.startItem = (this.value - 1) * this.itemsPerPage + 1;
        this.endItem = Math.min(this.value * this.itemsPerPage, this.numberItems);
    }
    get currentLanguage() {
        switch (this.language) {
            case 'en_US':
                return en_US;
            case 'es_MX':
                return es_MX;
            default:
                return pt_BR;
        }
    }
    render() {
        const { currentLanguage } = this;
        return (index.h(index.Host, { key: '9b819ad5880220286319f4327576a5af4db9f0c3', class: { full_width: this.pageCounter } }, index.h("bds-grid", { key: 'bf21657a20c2910edc46753d829b74dc1be0c78e', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (index.h("bds-grid", { key: 'fc93356f5bc2a3f506099d6bc23b78ab3a2c29f9', gap: "1", "align-items": "center", class: "items_per_page" }, index.h("bds-typo", { key: 'c7424435fec18524ff78ee35db38e3b3e803f2ba', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), index.h("bds-select", { key: 'd08299fff619ee9c4bdb53d6af162d4339960d1b', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, this.itemsPage?.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.itemSelected(el) }, el)))), index.h("bds-typo", { key: '9ed7dbab2339a1b876b5946e0e6268a1649764f2', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), index.h("bds-grid", { key: 'f3b396a8dc5d574f71f276b0265d125759b8b531', gap: "1", "align-items": "center", class: "actions" }, index.h("bds-button-icon", { key: '4017259012ce36715234ade502e3be5927cc2636', onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), index.h("bds-button-icon", { key: '5b8ade8c02e54a90a2c5b062277aa6c84d3f1ea8', onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), index.h("bds-select", { key: '7a7806c4ed18ce5656fa1bb6d6f8a5975d4aa3d3', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (index.h("bds-typo", { key: 'e26b822ff60e443efab8f3e5be618f512c15e275', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), index.h("bds-button-icon", { key: '5e2d02d1e75af006e0eecf181fbd326d6d9bbd59', onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), index.h("bds-button-icon", { key: 'e75b704818944980bd1c25a51c52aab82f7886fb', onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "pages": ["pagesChanged"],
        "startedPage": ["pagesChanged"],
        "value": ["valueChanged"],
        "itemValue": ["itemSelected"]
    }; }
};
Pagination.style = BdsPaginationStyle0;

exports.bds_pagination = Pagination;
