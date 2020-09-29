import * as R from 'ramda';
import { createSelector } from 'reselect';

export const moduleSelector = R.prop('products');

// @ts-ignore
export const productListSelector = createSelector(moduleSelector, R.prop('productList'));
