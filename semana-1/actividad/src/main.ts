import { ProductService } from "./services/ProductService";
import { SupplierService } from "./services/SupplierService";
import { InventoryManager } from "./services/InventoryManager";
import { mockProducts, mockSuppliers } from "./data/mockData";
import { renderProducts } from "./ui/renderProducts";
import { renderSuppliers } from "./ui/renderSuppliers";
import { renderAlerts } from "./ui/renderAlerts";

const productService = new ProductService();
const supplierService = new SupplierService();
const inventoryManager = new InventoryManager(productService);

mockSuppliers.forEach((s) => supplierService.register(s));
mockProducts.forEach((p) => productService.register(p));

function renderAll(): void {
  renderProducts(productService.getAll());
  renderSuppliers(supplierService.getAll());
  renderAlerts(inventoryManager.getLowStockAlerts());
}

renderAll();

inventoryManager.registerMovement(2, 1, "out");
renderAll();