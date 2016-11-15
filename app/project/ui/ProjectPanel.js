import styles from './ProjectPanel.less';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Icon from '../../foundation/ui/Icon';
import PrimaryPanel from '../../workspace/primary/PrimaryPanel';

@CSSModules(styles)
export default class ProjectPanel extends Component {

  render() {
    return (
      <div styleName="project-panel">
        <PrimaryPanel title="Project Explorer">
          <div styleName="project-tree"></div>
        </PrimaryPanel>
      </div>
    );
  }

}
