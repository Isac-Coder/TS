import type { Product } from "../models/product";
import { qs, createElement } from "./dom";

export function renderAlerts(lowStockProducts: Product[]): void {
  const container = qs<HTMLElement>("#alerts");
  container.innerHTML = "";

  if (lowStockProducts.length === 0) return;

  const title = createElement("h2", { text: "⚠️ Alertas de bajo inventario" });
  container.appendChild(title);

  const list = createElement("ul");
  for (const product of lowStockProducts) {
    list.appendChild(
      createElement("li", {
        text: `${product.name} — quedan ${product.quantity} unidades`,
      })
    );
  }
  container.appendChild(list);
}