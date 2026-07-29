"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOW_STOCK_THRESHOLD = void 0;
exports.isLowStock = isLowStock;
exports.isValidPrice = isValidPrice;
exports.isValidQuantity = isValidQuantity;
exports.LOW_STOCK_THRESHOLD = 5;
function isLowStock(product) {
    return product.quantity <= exports.LOW_STOCK_THRESHOLD;
}
function isValidPrice(price) {
    return Number.isFinite(price) && price > 0;
}
function isValidQuantity(quantity) {
    return Number.isInteger(quantity) && quantity >= 0;
}
