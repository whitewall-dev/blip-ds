import { r as registerInstance, h, H as Host } from './index-4a97732a.js';

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";
const BdsTableStyle0 = tableCss;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrollable = undefined;
        this.collapse = undefined;
        this.denseTable = undefined;
    }
    render() {
        return (h(Host, { key: '364082094ee5475fd0e04a19e2d4949cfaaff5bb', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '0a1897205bac89066474c78855873546324395e5', class: "bds-table" }, h("slot", { key: '201d08c50a54a44641e595184eb7a15c7acd714e' }))));
    }
};
Table.style = BdsTableStyle0;

export { Table as bds_table };
