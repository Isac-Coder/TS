"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = require("./services/productService");
const SupplierService_1 = require("./services/SupplierService");
const InventoryManager_1 = require("./services/InventoryManager");
const mockData_1 = require("./data/mockData");
const renderProducts_1 = require("./ui/renderProducts");
const renderSuppliers_1 = require("./ui/renderSuppliers");
const renderAlerts_1 = require("./ui/renderAlerts");
const productService = new productService_1.ProductService();
const supplierService = new SupplierService_1.SupplierService();
const inventoryManager = new InventoryManager_1.InventoryManager(productService);
mockData_1.mockSuppliers.forEach((s) => supplierService.register(s));
mockData_1.mockProducts.forEach((p) => productService.register(p));
function renderAll() {
    (0, renderProducts_1.renderProducts)(productService.getAll());
    (0, renderSuppliers_1.renderSuppliers)(supplierService.getAll());
    (0, renderAlerts_1.renderAlerts)(inventoryManager.getLowStockAlerts());
}
renderAll();
inventoryManager.registerMovement(2, 1, "out");
renderAll();
