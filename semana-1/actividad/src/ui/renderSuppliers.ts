import type { Supplier } from "../models/supplier";
import { qs, createElement } from "./dom";

export function renderSuppliers(suppliers: Supplier[]): void {
  const list = qs<HTMLUListElement>("#suppliers-list");
  list.innerHTML = "";

  for (const supplier of suppliers) {
    const item = createElement("li", {
      text: supplier.contactEmail
        ? `${supplier.name} (${supplier.contactEmail})`
        : supplier.name,
    });
    list.appendChild(item);
  }
}