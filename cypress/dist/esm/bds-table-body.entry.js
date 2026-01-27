import { r as registerInstance, h, H as Host, g as getElement } from './index-DSFaLz79.js';

const tableBodyCss = ".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}";

const TableBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.multipleRows = false;
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
            this.multipleRows = true;
        }
    }
    render() {
        return (h(Host, { key: '5724bda9bbf3c1bad1b85894f5c7a98e7e0a243e', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '25e0ef39db787b10aa53dddfbe2dbacbfb77aab6' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss;

export { TableBody as bds_table_body };
