import { createStore, applyMiddleware } from 'redux';

import createLogger from 'redux-logger';

import reducers from './reducers';

let loggerMiddleware = createLogger();

let store = createStore(reducers, applyMiddleware(loggerMiddleware));

export default store;