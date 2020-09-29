import { combineReducers } from 'redux';

import { default as products } from './product/product.duck';
import { default as carts } from './cart/cart.duck';

export default combineReducers({
  products,
  carts,
});
