import { createAction } from 'redux-actions';

import { getActionWrapper } from 'src/utils';
import { Action } from 'src/redux/types';

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductList {
  productList: Product[];
  isLoading?: boolean;
}

const initState: ProductList = {
  productList: [],
  isLoading: false,
};

const wrapWithNameSpace = getActionWrapper('PRODUCTS');

export const GET_ALL_PRODUCTS = wrapWithNameSpace('GET_ALL_PRODUCTS');
export const GET_ALL_PRODUCTS_SUCCESS = wrapWithNameSpace('GET_ALL_PRODUCTS_SUCCESS');
export const SET_LOADING_STATE = wrapWithNameSpace('SET_LOADING_STATE');

export const getAllProducts = createAction(GET_ALL_PRODUCTS);
export const getAllProductsSuccess = createAction(GET_ALL_PRODUCTS_SUCCESS);
export const setLoadingState = createAction(SET_LOADING_STATE);

export default (state = initState, action: Action) => {
  const { type, payload } = action;

  const reducer = {
    [GET_ALL_PRODUCTS_SUCCESS]: (state: ProductList, payload: any) => ({
      ...state,
      productList: payload,
      isLoading: false,
    }),
  }[type];

  return reducer ? reducer(state, payload) : state;
};
