"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryManager = void 0;
const validators_1 = require("../utils/validators");
class InventoryManager {
    constructor(productService) {
        this.productService = productService;
        this.movements = [];
        this.nextMovementId = 1;
    }
    registerMovement(productId, quantity, type) {
        const product = this.productService.getById(productId);
        if (!product) {
            throw new Error(`Producto con id ${productId} no encontrado`);
        }
        const newQuantity = type === "in" ? product.quantity + quantity : product.quantity - quantity;
        if (newQuantity < 0) {
            throw new Error(`No hay suficiente stock de "${product.name}" para esta salida`);
        }
        this.productService.update(productId, {
            quantity: newQuantity,
            status: newQuantity === 0 ? "out_of_stock" : product.status,
        });
        const movement = {
            id: this.nextMovementId++,
            productId,
            quantity,
            type,
            date: new Date(),
        };
        this.movements.push(movement);
        return movement;
    }
    getMovements() {
        return [...this.movements];
    }
    getLowStockAlerts() {
        return this.productService.getAll().filter(validators_1.isLowStock);
    }
}
exports.InventoryManager = InventoryManager;
