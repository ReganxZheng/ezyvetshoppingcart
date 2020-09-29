import { combineReducers } from 'redux';

import { default as products } from './product/product.duck';

export default combineReducers({
  products,
});
