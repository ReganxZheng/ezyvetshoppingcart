import { createSelector } from 'reselect';
import * as R from 'ramda';

import { getProductCountInCart, getTotalCostInCart } from './cart.utils';

const moduleSelector = R.prop('carts');

// @ts-ignore
export const cartListSelector = createSelector(moduleSelector, R.prop('cartList'));

export const isCartEmptySelector = createSelector(cartListSelector, R.isEmpty);

export const productCountSelector = createSelector(cartListSelector, getProductCountInCart);

export const totalCostSelector = createSelector(cartListSelector, getTotalCostInCart);
