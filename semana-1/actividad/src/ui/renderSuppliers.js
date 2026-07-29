"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSuppliers = renderSuppliers;
const dom_1 = require("./dom");
function renderSuppliers(suppliers) {
    const list = (0, dom_1.qs)("#suppliers-list");
    list.innerHTML = "";
    for (const supplier of suppliers) {
        const item = (0, dom_1.createElement)("li", {
            text: supplier.contactEmail
                ? `${supplier.name} (${supplier.contactEmail})`
                : supplier.name,
        });
        list.appendChild(item);
    }
}
