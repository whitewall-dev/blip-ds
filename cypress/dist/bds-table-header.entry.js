import { r as registerInstance, h, H as Host } from './index-4a97732a.js';

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";
const BdsTableHeaderStyle0 = tableHeaderCss;

const TableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '55f253ec9c9460da9b99dcd5ca7b0b3e1962d39d' }, h("slot", { key: '43cb0a790d2d9057dae37fdcab780bdb521bf726' })));
    }
};
TableHeader.style = BdsTableHeaderStyle0;

export { TableHeader as bds_table_header };
