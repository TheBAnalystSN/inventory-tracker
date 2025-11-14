import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// Create product instances
const products = [
  new PhysicalProduct("PH001", "Laptop", 1200, 2.5),
  new DigitalProduct("DG001", "E-book", 15, 5.2),
  new PhysicalProduct("PH002", "Headphones", 100, 0.5),
];

// Display details and tax info
for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Final Price (with tax): $${calculateTax(product).toFixed(2)}`);
  console.log("---------------------------");
}
