"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAlerts = renderAlerts;
const dom_1 = require("./dom");
function renderAlerts(lowStockProducts) {
    const container = (0, dom_1.qs)("#alerts");
    container.innerHTML = "";
    if (lowStockProducts.length === 0)
        return;
    const title = (0, dom_1.createElement)("h2", { text: "⚠️ Alertas de bajo inventario" });
    container.appendChild(title);
    const list = (0, dom_1.createElement)("ul");
    for (const product of lowStockProducts) {
        list.appendChild((0, dom_1.createElement)("li", {
            text: `${product.name} — quedan ${product.quantity} unidades`,
        }));
    }
    container.appendChild(list);
}
