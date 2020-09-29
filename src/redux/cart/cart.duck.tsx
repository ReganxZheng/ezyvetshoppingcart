import { createAction } from 'redux-actions';
import * as R from 'ramda';

import { getActionWrapper } from 'src/utils';
import { Action } from 'src/redux/types';
import { Product } from 'src/redux/product/product.duck';
import { getLocalStorageList, updateList } from 'src/utils';

export interface CartProduct extends Product {
  quantity: number;
  subTotal: number;
}

interface CartList {
  cartList: CartProduct[];
}

const initState: CartList = {
  cartList: getLocalStorageList(),
};

const wrapWithNameSpace = getActionWrapper('CART');

export const ADD_TO_CART = wrapWithNameSpace('ADD_TO_CART');
export const REMOVE_FROM_CART = wrapWithNameSpace('REMOVE_FROM_CART');
export const ADD_QUANTITY = wrapWithNameSpace('ADD_QUANTITY');
export const REMOVE_QUANTITY = wrapWithNameSpace('REMOVE_QUANTITY');

export const addToCart = createAction(ADD_TO_CART);
export const removeFromCart = createAction(REMOVE_FROM_CART);
export const AddQuantity = createAction(ADD_QUANTITY);
export const removeQuantity = createAction(REMOVE_QUANTITY);

const addToCartHandler = (state: CartList, payload: any) => {
  const { cartList } = state;
  const { id, price } = payload;

  const result = R.find((item: CartProduct) => item.id === id)(cartList)
    ? R.map(
        (item) => (item.id === id ? { ...item, quantity: item.quantity + 1, subTotal: item.subTotal + price } : item),
        cartList
      )
    : [...cartList, { ...payload, quantity: 1, subTotal: price }];

  updateList(result);
  return { ...state, cartList: result };
};

const removeFromCartHandler = (state: CartList, payload: any) => {
  const { cartList } = state;
  const { id } = payload;

  const result = R.filter((item) => item.id !== id, cartList);
  updateList(result);

  return { ...state, cartList: result };
};

const removeQuantityHandler = (state: CartList, payload: any) => {
  const { cartList } = state;
  const { id, quantity, price } = payload;

  const result =
    quantity - 1 === 0
      ? R.filter((item) => item.id !== id, cartList)
      : R.map(
          (item) => (item.id === id ? { ...item, quantity: item.quantity - 1, subTotal: item.subTotal - price } : item),
          cartList
        );

  updateList(result);
  return { ...state, cartList: result };
};

export default (state = initState, action: Action) => {
  const { type, payload } = action;

  const reducer = {
    [ADD_TO_CART]: addToCartHandler,
    [REMOVE_FROM_CART]: removeFromCartHandler,
    [ADD_QUANTITY]: addToCartHandler,
    [REMOVE_QUANTITY]: removeQuantityHandler,
  }[type];

  return reducer ? reducer(state, payload) : state;
};
