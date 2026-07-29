import type { ProductCategory } from "../types/product.types";

const VALID_CATEGORIES: ProductCategory[] = [
  "technology",
  "clothing",
  "food",
  "home",
];

export function isProductCategory(value: string): value is ProductCategory {
  return (VALID_CATEGORIES as string[]).includes(value);
}