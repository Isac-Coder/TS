"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProductCategory = isProductCategory;
const VALID_CATEGORIES = [
    "technology",
    "clothing",
    "food",
    "home",
];
function isProductCategory(value) {
    return VALID_CATEGORIES.includes(value);
}
