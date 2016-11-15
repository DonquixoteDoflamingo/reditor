import styles from './Workspace.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Toolbar from './toolbar/Toolbar';
import Primary from './primary/Primary';
import EditorContainer from './editor/EditorContainer';
import Bottom from './bottom/Bottom';

@CSSModules(styles)
export default class Workspace extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      primaryWidth: 200,
      secondaryWidth: 200,
    };
  }

  render() {
    return (
      <div styleName="workspace">
        <Toolbar />
        <div styleName="content">
          <Primary ref="primary" width={this.state.primaryWidth} />
          {this.renderSplitter('primaryWidth', 1)}
          <EditorContainer />
          {this.renderSplitter('secondaryWidth', -1)}
          <Primary ref="secondary" width={this.state.secondaryWidth} right={true}/>
        </div>
        <Bottom />
      </div>
    );
  }

  renderSplitter(key, deltaMultiply) {
    let onMouseDown = (e) => {
      e.target.classList.add(styles.moving);
      this.mouseLastX = e.pageX;
      this.mouseLastY = e.pageY;
    };
    let onMouseMove = (e) => {
      if(!e.target.classList.contains(styles.moving)) return;
      let deltaX = e.pageX - this.mouseLastX;
      deltaX *= deltaMultiply;
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
