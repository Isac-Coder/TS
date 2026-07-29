import type { Product } from "../models/product";
import type { Supplier } from "../models/supplier";


export const mockSuppliers: Supplier[] = [
  { id: 1, name: "TechSupply S.A.S", contactEmail: "ventas@techsupply.com" },
  { id: 2, name: "ModaColombia" },
  { id: 3, name: "AlimentosFrescos Ltda", contactEmail: "contacto@alimentosfrescos.com" },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Laptop Lenovo ThinkPad",
    sku: "TEC-001",
    category: "technology",
    price: 3200000,
    quantity: 8,
    supplierId: 1,
    status: "active",
  },
  {
    id: 2,
    name: "Camiseta algodón",
    sku: "ROP-001",
    category: "clothing",
    price: 45000,
    quantity: 3,
    supplierId: 2,
    status: "active",
  },
  {
    id: 3,
    name: "Café molido 500g",
    sku: "ALI-001",
    category: "food",
    price: 18000,
    quantity: 20,
    supplierId: 3,
    status: "active",
  },
];