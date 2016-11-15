import { createStore, applyMiddleware, combineReducers } from 'redux';
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
  combineReducers({
    nop: nopReducer
  }),
  applyMiddleware(...middleware)
);

let reducers = {
  nop: nopReducer
};

function reconfigureStore() {
  store.replaceReducer(combineReducers(reducers));
}

export function addReducer(theReducers) {
  let newReducers = {
    ...reducers,
    ...theReducers
  };
  reducers = newReducers;
  reconfigureStore();
}

export function removeReducer(theReducers) {
  Object.keys(theReducers).forEach((id) => {
    delete reducers[id];
  });
  reconfigureStore();
}

export default store;
