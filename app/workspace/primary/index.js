import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';
import store, { addReducer } from '../../store';


const register = createAction('workspace.primary.register');
const unregister = createAction('workspace.primary.unregister');
const reducer = createReducer({
  [register]: (state, payload) => {
    console.log(state);
    let list = state.list.slice(0);
    list.push(payload);
    return {
      ...state,
      list: list
    };
  },
  [unregister]: (state, id) => {
    let list = state.list.slice(0);
    for(let i=0; i<list; i++) {
      if(list[i].id === id) {
        list.splice(i, 1);
        return state;
      }
    }
    return {
      ...state,
      list: list,
    };
  }
}, {
  list: [],
  active: 0
});

addReducer({ primary: reducer });

export function openPrimaryPanel(id) {

}

export function registerPrimaryPanel(params) {
  console.log(params);
  store.dispatch(register(params));
}

export function unregisterPrimaryPanel(id) {
  store.dispatch(register(id));
}
