import styles from './Box.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Box extends Component {

  render() {
    return (<div styleName="box"></div>)
  }

}
