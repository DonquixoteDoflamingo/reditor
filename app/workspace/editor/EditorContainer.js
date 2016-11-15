import styles from './EditorContainer.less';
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
export default class EditorContainer extends Component {

  render() {
    return (
      <div styleName="editor-container">
        <div styleName="tabs">
          <EditorTab title="test.js" active={true}/>
          <EditorTab title="test.js"/>
          <EditorTab title="test.js"/>
        </div>
      </div>
    );
  }

}

@CSSModules(styles)
class EditorTab extends Component {

  render() {
    return (
      <div
        styleName="tab-item"
        data-active={this.props.active ? 'true' : 'false'}
      >
        {this.props.title}
      </div>
    );
  }

}
