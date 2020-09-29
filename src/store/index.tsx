import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import allReducer from 'src/redux';
import allSaga from 'src/redux/saga';

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware];

const middleware = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(allReducer, middleware);

sagaMiddleware.run(allSaga);

export default store;
