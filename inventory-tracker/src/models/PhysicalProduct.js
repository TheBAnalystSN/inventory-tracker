"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    // PhysicalProduct Subclass:
    getPriceWithTax() {
        const taxRate = 0.1;
        return this.price + this.price * taxRate;
    }
    get formattedWeight() {
        return `${this.weight.toFixed(1)} kg`;
    }
    displayDetails() {
        return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
//# sourceMappingURL=PhysicalProduct.js.map