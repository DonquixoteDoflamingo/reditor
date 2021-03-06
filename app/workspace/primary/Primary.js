import styles from './Primary.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import Icon from '../../foundation/ui/Icon';

@connect((state) => {
  return {
    primary: state.primary
  }
}, (dispatch) => {
  return {};
})
@CSSModules(styles)
export default class Primary extends Component {

  render() {
    let list = this.props.right ? this.props.primary.listRight : this.props.primary.listLeft;
    let active = this.props.right ? this.props.primary.activeRight : this.props.primary.activeLeft;
    let Component = list[active] && list[active].component || (() => null);
    return (
      <div styleName="primary" style={{ width: this.props.width + 'px' }} data-right={this.props.right ? 'true' : 'false'}>
        <div styleName="side">
          <div styleName="side-corner">&nbsp;</div>
          {list.map((panelParams, idx) => {
            return <SideItem
              key={panelParams.id}
              title={panelParams.displayName}
              active={idx === active}
            />
          })}
        </div>
        <div styleName="panel">
          <Component />
        </div>
      </div>
    );
  }

}

@CSSModules(styles)
class SideItem extends Component {

  render() {
    return (
      <div styleName="side-item" data-active={this.props.active ? 'true' : 'false'}>
        {this.renderIcon()}
        {this.props.title}
      </div>
    );
  }

  renderIcon() {
    if(!this.props.icon) return null;
    return <Icon icon={this.props.icon} />;
  }

}
