import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';
import store, { addReducer } from '../../store';


const open = createAction('workspace.editor.open');
const reducer = createReducer({
  [open]: (state, payload) => {

  },
}, {
  editors: []
});

export function openEditor(params) {
  
}
