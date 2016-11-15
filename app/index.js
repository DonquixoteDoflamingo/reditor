import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Workspace from './workspace/Workspace';
import './project';

ReactDOM.render((
   <Provider store={store}>
    <Workspace />
   </Provider>
 ), document.getElementById('root'));
