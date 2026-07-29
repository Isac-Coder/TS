import type { Supplier } from "../models/supplier";
import type { SupplierId } from "../types/ids.types";

export class SupplierService {
  private suppliers: Supplier[] = [];

  register(supplier: Supplier): Supplier {
    this.suppliers.push(supplier);
    return supplier;
  }

  getAll(): Supplier[] {
    return [...this.suppliers];
  }

  getById(id: SupplierId): Supplier | undefined {
    return this.suppliers.find((s) => s.id === id);
  }
}