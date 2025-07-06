// data/products.ts

export const productData = {
  a: {
    name: 'Category A',
    products: [
      {
        id: 'prod-a-1',
        name: 'Product A1',
        price: 199.99,
        image: '/products/a1.jpg',
        description: 'High-quality item from Category A.',
      },
      {
        id: 'prod-a-2',
        name: 'Product A2',
        price: 149.99,
        image: '/products/a2.jpg',
        description: 'Reliable and stylish product from Category A.',
      },
    ],
  },
  b: {
    name: 'Category B',
    products: [
      {
        id: 'prod-b-1',
        name: 'Product B1',
        price: 299.99,
        image: '/products/b1.jpg',
        description: 'Advanced technology from Category B.',
      },
    ],
  },
  c: {
    name: 'Category C',
    products: [
      {
        id: 'prod-c-1',
        name: 'Product C1',
        price: 99.99,
        image: '/products/c1.jpg',
        description: 'Affordable and efficient Category C item.',
      },
    ],
  },
};
