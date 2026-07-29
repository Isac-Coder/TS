import type { SupplierId } from "../types/ids.types";
import type { SupplierName, ContactEmail } from "../types/supplier.types";

export interface Supplier {
  readonly id: SupplierId;
  name: SupplierName;
  contactEmail?: ContactEmail;
}