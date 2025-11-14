"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
// Create product instances
const products = [
    new PhysicalProduct_1.PhysicalProduct("PH001", "Laptop", 1200, 2.5),
    new DigitalProduct_1.DigitalProduct("DG001", "E-book", 15, 5.2),
    new PhysicalProduct_1.PhysicalProduct("PH002", "Headphones", 100, 0.5),
];
// Display details and tax info
for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price (with tax): $${(0, taxCalculator_1.calculateTax)(product).toFixed(2)}`);
    console.log("---------------------------");
}
//# sourceMappingURL=main.js.map