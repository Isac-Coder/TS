import type { ProductId, InventoryId } from "./ids.types";
import type { Quantity } from "./product.types";

// entrada o salida de stock.
export type MovementType = "in" | "out";

export type StockMovementTuple = [ProductId, Quantity, MovementType];

export interface InventoryMovement {
  readonly id: InventoryId;
  productId: ProductId;
  quantity: Quantity;
  type: MovementType;
  date: Date;
}