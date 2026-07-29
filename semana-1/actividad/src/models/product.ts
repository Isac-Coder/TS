import type { ProductId, SupplierId } from "../types/ids.types";
import type {
  ProductName,
  SKU,
  Price,
  Quantity,
  ProductCategory,
  ProductStatus,
} from "../types/product.types";

export interface Product {
  readonly id: ProductId;
  name: ProductName;
  sku: SKU;
  category: ProductCategory;
  price: Price;
  quantity: Quantity;
  supplierId: SupplierId;
  status: ProductStatus;
}