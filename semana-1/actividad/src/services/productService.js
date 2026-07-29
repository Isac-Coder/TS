"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const validator_1 = require("../utils/validator");
class ProductService {
    constructor() {
        this.products = [];
    }
    register(product) {
        if (!(0, validator_1.isValidPrice)(product.price)) {
            throw new Error(`Precio inválido para el producto "${product.name}"`);
        }
        if (!(0, validator_1.isValidQuantity)(product.quantity)) {
            throw new Error(`Cantidad inválida para el producto "${product.name}"`);
        }
        this.products.push(product);
        return product;
    }
    getAll() {
        return [...this.products];
    }
    getById(id) {
        return this.products.find((p) => p.id === id);
    }
    update(id, changes) {
        const product = this.getById(id);
        if (!product)
            return undefined;
        Object.assign(product, changes);
        return product;
    }
}
exports.ProductService = ProductService;
