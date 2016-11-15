import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';
import store, { addReducer } from '../../store';


const register = createAction('workspace.primary.register');
const unregister = createAction('workspace.primary.unregister');
const reducer = createReducer({
  [register]: (state, payload) => {
    let list;
    let key;
    if(payload.right) {
      key = 'listRight';
      list = state.listRight.slice(0);
    } else {
      key = 'listLeft';
      list = state.listLeft.slice(0);
    }
    list.push(payload);
    return {
      ...state,
      [key]: list
    };
  },
  [unregister]: (state, id) => {
    let list = state.listLeft;
    for(let i=0; i<list; i++) {
      if(list[i].id === id) {
        list = list.slice(0);
        list.splice(i, 1);
        return {
          ...state,
          listLeft: list
        };
      }
    }
    list = state.listRight;
    for(let i=0; i<list; i++) {
      if(list[i].id === id) {
        list = list.slice(0);
        list.splice(i, 1);
        return {
          ...state,
          listRight: list
        };
      }
    }
  }
}, {
  listLeft: [],
  listRight: [],
  activeLeft: 0,
  activeRight: 0,
});

addReducer({ primary: reducer });

export function registerPrimaryPanel(params) {
  store.dispatch(register(params));
}

export function unregisterPrimaryPanel(id) {
  store.dispatch(register(id));
}
