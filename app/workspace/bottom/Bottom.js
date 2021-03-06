import styles from './Bottom.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import Icon from '../../foundation/ui/Icon';

@connect((state) => {
  return {
    editor: state.editor
  }
}, (dispatch) => {
  return {};
})
@CSSModules(styles)
export default class Bottom extends Component {

  render() {
    return (
      <div styleName="bottom">
      </div>
    );
  }

}
