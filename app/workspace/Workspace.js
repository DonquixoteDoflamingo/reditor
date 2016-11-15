import styles from './Workspace.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Toolbar from './toolbar/Toolbar';
import Primary from './primary/Primary';
import EditorContainer from './editor/EditorContainer';

@CSSModules(styles)
export default class Workspace extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      primaryWidth: 200
    };
  }

  render() {
    return (
      <div styleName="workspace">
        <Toolbar />
        <div styleName="content">
          <Primary ref="primary" width={this.state.primaryWidth} />
          {this.renderSplitter('primaryWidth')}
          <EditorContainer />
        </div>
      </div>
    );
  }

  renderSplitter(key) {
    let onMouseDown = (e) => {
      e.target.classList.add(styles.moving);
      this.mouseLastX = e.pageX;
      this.mouseLastY = e.pageY;
    };
    let onMouseMove = (e) => {
      if(!e.target.classList.contains(styles.moving)) return;
      let deltaX = e.pageX - this.mouseLastX;
      this.setState({ [key]: this.state[key] + deltaX });
      this.mouseLastX = e.pageX;
      this.mouseLastY = e.pageY;
    };
    let onMouseUp = (e) => {
      e.target.classList.remove(styles.moving);
    };
    return (<div styleName="splitter">
      <div
        styleName="splitter-mover"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      ></div>
    </div>);
  }

}
