import { r as registerInstance, h, H as Host, g as getElement } from './index-Cawn__Z9.js';

const tableCellCss = () => `.sc-bds-table-cell-h{display:table-cell;padding:0 8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:14px;vertical-align:middle}.cell.sc-bds-table-cell{display:flex;align-items:center;min-height:48px;margin:8px 0;color:var(--color-content-default, rgb(40, 40, 40));font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;flex-direction:row;flex-wrap:wrap}.dense_cell.sc-bds-table-cell{margin:0}.cell_custom.sc-bds-table-cell{gap:8px}.cell_action.sc-bds-table-cell{flex-direction:row;gap:8px}.justify--left.sc-bds-table-cell{justify-content:flex-start}.justify--center.sc-bds-table-cell{justify-content:center}.justify--right.sc-bds-table-cell{justify-content:flex-end}.sc-bds-table-cell-h:first-child{padding-left:16px}.sc-bds-table-cell-h:last-child{padding-right:16px}`;

const TableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDense = false;
        this.type = 'text';
        this.sortable = false;
        this.justifyContent = 'left';
    }
    renderContent() {
        return this.type === 'custom' ? (h("div", { class: { cell: true, cell_custom: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : this.type === 'text' ? (h("div", { class: { cell: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("bds-typo", { variant: "fs-14", bold: this.sortable ? 'bold' : 'regular' }, h("slot", null)))) : this.type === 'action' ? (h("div", { class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : this.type === 'collapse' ? (h("td", { colSpan: 2, class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : (h("slot", null));
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && bdsTable.getAttribute('dense-table') === 'true') {
            this.isDense = true;
        }
    }
    render() {
        return h(Host, { key: '308fc20da6c74c8808a4eca46cc3768985a73419' }, this.renderContent());
    }
    get element() { return getElement(this); }
};
TableCell.style = tableCellCss();

export { TableCell as bds_table_cell };
