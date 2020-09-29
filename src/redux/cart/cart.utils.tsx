import * as R from 'ramda';

import { CartProduct } from 'src/redux/cart/cart.duck';

export const getProductCountInCart = (data: CartProduct[]): number =>
  R.reduce((acc, item) => acc + item.quantity, 0, data);

export const getTotalCostInCart = (data: CartProduct[]): number =>
  R.reduce((acc, item) => acc + item.subTotal, 0, data);
