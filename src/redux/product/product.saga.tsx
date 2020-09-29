import { takeLatest, put } from 'redux-saga/effects';

import { mockAPIReturnProducts } from 'src/utils';

import * as actions from './product.duck';

function* getAllProductsSaga() {
  try {
    const result = yield mockAPIReturnProducts();
    yield put(actions.getAllProductsSuccess(result));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeLatest(actions.getAllProducts, getAllProductsSaga);
}
