"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderProducts = renderProducts;
const dom_1 = require("./dom");
function renderProducts(products) {
    const tbody = (0, dom_1.qs)("#products-body");
    tbody.innerHTML = "";
    for (const product of products) {
        const row = (0, dom_1.createElement)("tr");
        row.append((0, dom_1.createElement)("td", { text: product.sku }), (0, dom_1.createElement)("td", { text: product.name }), (0, dom_1.createElement)("td", { text: product.category }), (0, dom_1.createElement)("td", { text: `$${product.price.toLocaleString("es-CO")}` }), (0, dom_1.createElement)("td", { text: String(product.quantity) }), (0, dom_1.createElement)("td", { text: product.status }));
        tbody.appendChild(row);
    }
}
