
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { createAction, createReducer } from 'redux-act';

import Workspace from './workspace/Workspace';

const middleware = [
  createLogger()
];

const nop = createAction('Nop');
const nopReducer = createReducer({
  [nop]: (state) => state
}, 0);

const store = createStore(
  nopReducer,
  applyMiddleware(...middleware)
);

export default store;
