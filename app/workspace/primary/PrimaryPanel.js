import styles from './PrimaryPanel.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Icon from '../../foundation/ui/Icon';

@CSSModules(styles)
export default class PrimaryPanel extends Component {

  render() {
    return (
      <div styleName="primary-panel">
        <header styleName="header">{this.props.title}</header>
        <div styleName="content">{this.props.children}</div>
      </div>
    );
  }

}
