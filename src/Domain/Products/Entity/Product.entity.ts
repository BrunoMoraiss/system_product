export class ProductEntity {
  private name: string;
  private description: string;
  private price: number;
  private stockQuantity: number;
  private category: string;
  private provider: string;

  constructor(
    name: string,
    description: string,
    price: number,
    stockQuantity: number,
    category: string,
    provider: string,
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.provider = provider;
    this.stockQuantity = stockQuantity;

    this.validate();
  }

  get getNameProduct() {
    return this.name;
  }

  validate() {
    if (this.name.length === 0) {
      throw new Error('Name is required');
    }

    if (this.description.length === 0) {
      throw new Error('Description is required');
    }

    if (this.price === 0) {
      throw new Error('Price is required');
    }

    if (this.provider.length === 0) {
      throw new Error('Provider is required');
    }

    if (this.stockQuantity === 0) {
      throw new Error('StockQuantity is required');
    }

    if (this.category.length === 0) {
      throw new Error('Category is required');
    }
  }
}
