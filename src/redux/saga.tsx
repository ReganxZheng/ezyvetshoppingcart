import { fork, all } from 'redux-saga/effects';

import productSaga from './product/product.saga';

export default function* () {
  yield all([fork(productSaga)]);
}
