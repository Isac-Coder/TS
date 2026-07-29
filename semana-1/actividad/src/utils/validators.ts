import type { Product } from "../models/product";

export const LOW_STOCK_THRESHOLD = 5;

export function isLowStock(product: Product): boolean {
  return product.quantity <= LOW_STOCK_THRESHOLD;
}

export function isValidPrice(price: number): boolean {
  return Number.isFinite(price) && price > 0;
}

export function isValidQuantity(quantity: number): boolean {
  return Number.isInteger(quantity) && quantity >= 0;
}