"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// The Product Base Class
class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku} | Name: ${this.name} | Price: $${this.price.toFixed(2)}`;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map