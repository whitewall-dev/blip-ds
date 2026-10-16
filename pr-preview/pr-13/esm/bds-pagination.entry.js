import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-Cawn__Z9.js';
import { c as getScrollParent } from './position-element-YWuFnlrS.js';

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

const paginationCss = () => `:host{display:block}:host .actions_select{width:74px}:host(.full_width){width:100%}@media screen and (max-width: 905px){.items_per_page{display:none}.actions{width:100%;justify-content:center}}@media screen and (max-width: 600px){.actions--text{display:none}}`;

const Pagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsPaginationChange = createEvent(this, "bdsPaginationChange");
        this.bdsItemsPerPageChange = createEvent(this, "bdsItemsPerPageChange");
        /**
         * Estado que armazena o valor selecionado no seletor de página.
         * Inicialmente, é configurado com a página inicial (startedPage).
         */
        this.value = this.startedPage;
        /**
         * Estado que armazena o número de páginas, gerado com base no total de itens e itens por página.
         */
        this.paginationNumbers = [];
        // Estado que guarda o elemento pai com rolagem (se houver)
        this.intoView = null;
        /**
         * Define a posição do menu de opções. Pode ser 'bottom' ou 'top'.
         * Padrão é 'auto', que ajusta automaticamente a posição.
         */
        this.optionsPosition = 'auto';
        // Propriedade que controla se o contador de páginas será exibido
        this.pageCounter = false;
        // Propriedade para definir o idioma do componente (opcional)
        this.language = 'pt_BR';
        /**
         * Propriedade de teste para especificamente testar a ação do botão inicial.
         * dtButtonInitial é o data-test para o botão inicial.
         */
        this.dtButtonInitial = null;
        /**
         * Propriedade de teste para especificamente testar a ação do botão de página anterior.
         * dtButtonPrev é o data-test para o botão anterior.
         */
        this.dtButtonPrev = null;
        /**
         * Propriedade de teste para especificamente testar o seletor de número de páginas.
         * dtSelectNumber é o data-test para o seletor de número de páginas.
         */
        this.dtSelectNumber = null;
        /**
         * Propriedade de teste para especificamente testar a ação do botão de próxima página.
         * dtButtonNext é o data-test para o botão próximo.
         */
        this.dtButtonNext = null;
        /**
         * Propriedade de teste para especificamente testar a ação do botão final.
         * dtButtonEnd é o data-test para o botão final.
         */
        this.dtButtonEnd = null;
        this.nextPage = (event) => {
            const el = this.value;
            const totalPages = this.pages || 0;
            if (el < totalPages) {
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
            const totalPages = this.pages || 0;
            if (el < totalPages) {
                event.preventDefault();
                this.value = totalPages;
                this.updateItemRange();
            }
        };
        this.openOptions = () => {
            this.openSelect = !this.openSelect;
        };
        this.onBlur = () => {
            this.openSelect = false;
        };
    }
    componentWillLoad() {
        this.countPage();
        this.intoView = getScrollParent(this.el);
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
        const totalPages = this.pages || 0;
        if (this.paginationNumbers.length !== 0) {
            this.paginationNumbers = [];
        }
        if (this.paginationNumbers.length === 0) {
            for (let i = 1; i <= totalPages; i++) {
                this.paginationNumbers.push(i);
            }
            if (Number.isFinite(this.startedPage) && totalPages > 0) {
                const normalizedStartedPage = Math.min(totalPages, Math.max(1, Math.trunc(this.startedPage)));
                this.value = normalizedStartedPage;
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
        const totalPages = this.pages || 0;
        const isFirstPage = this.value <= 1;
        const isLastPage = this.value >= totalPages;
        const isSinglePage = totalPages <= 1;
        const disableBackActions = isSinglePage || isFirstPage;
        const disableForwardActions = isSinglePage || isLastPage;
        return (h(Host, { key: 'bd13d15d889945c757bf663639b6fdcc18c04f1e', class: { full_width: this.pageCounter } }, h("bds-grid", { key: '746db90a12dee5ce75aa50b7d7356d1cdc88c6cc', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { key: '7618187fb9c28e6334b471f57ff0f4edc4f4cfd3', gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { key: '0b8765a3aa997bc2ef522ebfee35ede44472278d', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { key: '81e021bd862f81f26fabd8261d543514cbd613ec', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, this.itemsPage?.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { key: '2806b2af4abcff341656c25d91ba56ba961e8115', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { key: '46de3c7da0daeb46c310aedcccc3bed0933a39b5', gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { key: '6b029eee4220858c1d7d4fa91ee66d4772d5b053', onBdsClick: (ev) => this.firstPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { key: '7542f4e1389024838f09e59be3f813a5b7326f1f', onBdsClick: (ev) => this.previewPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { key: '6126dd6c7c933e2af5cfb446a9d46ce86dcba0e3', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { key: 'a20feccef1af7e4df1bde5acd0f133b8830e79f4', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { key: '9fe201f1ab7037c45d75b0c587a42954c0dcdbe7', onBdsClick: (ev) => this.nextPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { key: '8d15e8d44005cf4fb13ae4ba8ae0c5fe20e2c489', onBdsClick: (ev) => this.lastPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "pages": [{
                "pagesChanged": 0
            }],
        "startedPage": [{
                "pagesChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }],
        "itemValue": [{
                "itemSelected": 0
            }]
    }; }
};
Pagination.style = paginationCss();

export { Pagination as bds_pagination };
