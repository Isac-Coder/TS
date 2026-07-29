import type { InventoryMovement, MovementType } from "../types/inventory.types";
import type { ProductId, InventoryId } from "../types/ids.types";
import type { Quantity } from "../types/product.types";
import type { Product } from "../models/product";
import { ProductService } from "./ProductService";
import { isLowStock } from "../utils/validators";

export class InventoryManager {
  private movements: InventoryMovement[] = [];
  private nextMovementId: InventoryId = 1;

  constructor(private readonly productService: ProductService) {}

  registerMovement(
    productId: ProductId,
    quantity: Quantity,
    type: MovementType
  ): InventoryMovement {
    const product = this.productService.getById(productId);
    if (!product) {
      throw new Error(`Producto con id ${productId} no encontrado`);
    }

    const newQuantity =
      type === "in" ? product.quantity + quantity : product.quantity - quantity;

    if (newQuantity < 0) {
      throw new Error(
        `No hay suficiente stock de "${product.name}" para esta salida`
      );
    }

    this.productService.update(productId, {
      quantity: newQuantity,
      status: newQuantity === 0 ? "out_of_stock" : product.status,
    });

    const movement: InventoryMovement = {
      id: this.nextMovementId++,
      productId,
      quantity,
      type,
      date: new Date(),
    };

    this.movements.push(movement);
    return movement;
  }

  getMovements(): InventoryMovement[] {
    return [...this.movements];
  }

  getLowStockAlerts(): Product[] {
    return this.productService.getAll().filter(isLowStock);
  }
}