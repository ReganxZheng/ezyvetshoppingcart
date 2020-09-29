import { CartProduct } from 'src/redux/cart/cart.duck';
import { getTotalCostInCart, getProductCountInCart } from './cart.utils';

let mockData: CartProduct[] = [];

beforeEach(() => {
  mockData = [
    {
      id: 1,
      name: 'test 1',
      price: 15.25,
      quantity: 3,
      subTotal: 45.75,
    },
    {
      id: 2,
      name: 'test 2',
      price: 39.99,
      quantity: 1,
      subTotal: 39.99,
    },
  ];
});

it('Should return a count of product in the shopping cart', () => {
  const result = getProductCountInCart(mockData);
  expect(result).toEqual(4);
});

it('Should return a total cost for shopping cart', () => {
  const result = getTotalCostInCart(mockData).toFixed(2);
  expect(Number(result)).toEqual(85.74);
});
