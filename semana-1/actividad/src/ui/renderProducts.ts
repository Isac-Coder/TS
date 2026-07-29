import type { Product } from "../models/product";
import { qs, createElement } from "./dom";

export function renderProducts(products: Product[]): void {
  const tbody = qs<HTMLTableSectionElement>("#products-body");
  tbody.innerHTML = "";

  for (const product of products) {
    const row = createElement("tr");

    row.append(
      createElement("td", { text: product.sku }),
      createElement("td", { text: product.name }),
      createElement("td", { text: product.category }),
      createElement("td", { text: `$${product.price.toLocaleString("es-CO")}` }),
      createElement("td", { text: String(product.quantity) }),
      createElement("td", { text: product.status })
    );

    tbody.appendChild(row);
  }
}