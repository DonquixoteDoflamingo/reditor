import styles from './Button.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Icon from './Icon';

@CSSModules(styles)
export default class Button extends Component {

  render() {
    let children = this.props.children;
    let icon = this.props.icon;
    if(typeof children === 'string') {
      if(children.trim() === '') {
        if(icon) {
          return <div styleName="button"><Icon icon={this.props.icon} /></div>;
        } else {
          return <div styleName="button">{children}</div>;
        }
      }
    } else if(icon) {
      return <div styleName="button"><Icon icon={this.props.icon} />{children}</div>;
    } else {
      return <div styleName="button">{children}</div>;
    }
  }

}
