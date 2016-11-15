import React, { Component } from 'react';

export default class Icon extends Component {

  render() {
    let className = 'fa ' + this.props.icon;
    return (
      <i className={className}></i>
    );
  }

}
