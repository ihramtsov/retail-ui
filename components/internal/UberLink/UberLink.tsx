import React from 'react';

import Clickable, { ClickableProps } from '../Clickable/Clickable';

import styles from './UberLink.less';

export type UberLinkUse = 'default' | 'success' | 'danger' | 'grayed';

export interface UberLinkProps extends ClickableProps {
  use?: UberLinkUse;
}

class UberLink extends React.Component<UberLinkProps> {
  render() {
    return <Clickable {...this.props} className={this.getUseClassName()} />;
  }

  private getUseClassName() {
    const use = this.props.use || 'default';
    switch (use) {
      case 'default':
        return styles.useDefault;
      case 'success':
        return styles.useSuccess;
      case 'danger':
        return styles.useDanger;
      case 'grayed':
        return styles.useGrayed;
      default:
        throw new TypeError('Unknown use prop: ' + use);
    }
  }
}

export default UberLink;
