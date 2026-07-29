import type { Product } from "../models/product";
import type { ProductId } from "../types/ids.types";
import { isValidPrice, isValidQuantity } from "../utils/validator";

export class ProductService {
  private products: Product[] = [];

  register(product: Product): Product {
    if (!isValidPrice(product.price)) {
      throw new Error(`Precio inválido para el producto "${product.name}"`);
    }
    if (!isValidQuantity(product.quantity)) {
      throw new Error(`Cantidad inválida para el producto "${product.name}"`);
    }
    this.products.push(product);
    return product;
  }

  getAll(): Product[] {
    return [...this.products];
  }

  getById(id: ProductId): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  update(id: ProductId, changes: Partial<Omit<Product, "id">>): Product | undefined {
    const product = this.getById(id);
    if (!product) return undefined;
    Object.assign(product, changes);
    return product;
  }
}