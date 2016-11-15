import styles from './Toolbar.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Button from '../../foundation/ui/Button';
import Icon from '../../foundation/ui/Icon';

@CSSModules(styles)
export default class Toolbar extends Component {

  render() {
    return (
      <div styleName="toolbar">
        <Button icon="fa-plus"></Button>
        <Button icon="fa-plus"></Button>
        {this.renderSplit()}
        <Button icon="fa-plus"></Button>
        <Button icon="fa-plus"></Button>
      </div>
    );
  }

  renderSplit() {
    return <div styleName="split"></div>;
  }

}
