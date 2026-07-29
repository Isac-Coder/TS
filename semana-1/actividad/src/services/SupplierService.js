"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierService = void 0;
// GestiÃ³n simple de proveedores.
class SupplierService {
    constructor() {
        this.suppliers = [];
    }
    register(supplier) {
        this.suppliers.push(supplier);
        return supplier;
    }
    getAll() {
        return [...this.suppliers];
    }
    getById(id) {
        return this.suppliers.find((s) => s.id === id);
    }
}
exports.SupplierService = SupplierService;
