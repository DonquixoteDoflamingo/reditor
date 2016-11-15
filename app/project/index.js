import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';
import store, { addReducer } from '../../store';
import { registerPrimaryPanel } from '../workspace/primary';
import ProjectPanel from './ui/ProjectPanel';
import settings from '../settings';

const openProject = createAction('project.open');
const reducer = createReducer({
  [openProject]: (state, payload) => {
    return {
      ...state,
      projectPath: payload
    }
  },
}, {
  projectPath: null
});

addReducer({ project: reducer });

registerPrimaryPanel({
  id: 'ProjectPanel',
  displayName: 'Project Explorer',
  component: ProjectPanel
});

settings.get('projectPath').then((path) => {
  if(!path) {
  }
});
