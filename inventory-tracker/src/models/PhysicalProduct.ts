import { Product } from "./Product";

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price);
  }

  // PhysicalProduct Subclass:
  getPriceWithTax(): number {
    const taxRate = 0.1;
    return this.price + this.price * taxRate;
  }

  get formattedWeight(): string {
    return `${this.weight.toFixed(1)} kg`;
  }

  override displayDetails(): string {
    return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
  }
}
