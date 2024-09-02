import { ProductEntity } from './Product.entity';

describe('Product Entity', () => {
  it('Should return success after create a new product', () => {
    const inputProduct = {
      name: 'Playstation 5',
      description: 'Video Game',
      price: 3000,
      stockQuantity: 10,
      category: 'Eletronico',
      provider: 'Sony',
    };
    const newProduct = new ProductEntity(
      inputProduct.name,
      inputProduct.description,
      inputProduct.price,
      inputProduct.stockQuantity,
      inputProduct.category,
      inputProduct.provider,
    );

    expect(newProduct).toEqual(inputProduct);
    expect(newProduct.getNameProduct).toBe(inputProduct.name);
  });

  describe('Product Entity unit Test', () => {
    it('should return a error, name is required', () => {
      expect(() => {
        new ProductEntity('', '', 0, 0, '', '');
      }).toThrow('Name is required');
    });
  });
});
