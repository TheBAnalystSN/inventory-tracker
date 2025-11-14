import { Product } from "./Product";

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private fileSize: number
  ) {
    super(sku, name, price);
  }

  // DigitalProduct Subclass
  getPriceWithTax(): number {
    return this.price;
  }

  get formattedFileSize(): string {
    return `${this.fileSize.toFixed(2)} MB`;
  }

  override displayDetails(): string {
    return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
  }
}
