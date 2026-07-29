"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs = qs;
exports.createElement = createElement;
function qs(selector) {
    const el = document.querySelector(selector);
    if (!el)
        throw new Error(`Elemento no encontrado: ${selector}`);
    return el;
}
function createElement(tag, options) {
    const el = document.createElement(tag);
    if (options === null || options === void 0 ? void 0 : options.className)
        el.className = options.className;
    if (options === null || options === void 0 ? void 0 : options.text)
        el.textContent = options.text;
    return el;
}
