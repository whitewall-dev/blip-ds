'use strict';

var index = require('./index-Bo6hPufM.js');

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '55f253ec9c9460da9b99dcd5ca7b0b3e1962d39d' }, index.h("slot", { key: '43cb0a790d2d9057dae37fdcab780bdb521bf726' })));
    }
};
TableHeader.style = tableHeaderCss;

exports.bds_table_header = TableHeader;
