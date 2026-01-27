import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '55f253ec9c9460da9b99dcd5ca7b0b3e1962d39d' }, h("slot", { key: '43cb0a790d2d9057dae37fdcab780bdb521bf726' })));
    }
    static get is() { return "bds-table-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-header.css"]
        };
    }
}
