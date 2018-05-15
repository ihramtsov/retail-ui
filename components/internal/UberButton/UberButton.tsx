import React from 'react';
import classNames from 'classnames';

import Clickable, { ClickableProps } from '../Clickable/Clickable';

import styles from './UberButton.less';

export type UberButtonUse =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'pay';

export interface UberButtonProps extends ClickableProps {
  use?: UberButtonUse;
}

class UberButton extends React.Component<UberButtonProps> {
  render() {
    return (
      <Clickable
        {...this.props}
        className={classNames(styles.root, this.getUseClassName())}
      />
    );
  }

  private getUseClassName() {
    const use = this.props.use || 'default';
    switch (use) {
      case 'default':
        return styles.useDefault;
      case 'primary':
        return styles.usePrimary;
      case 'success':
        return styles.useSuccess;
      case 'danger':
        return styles.useDanger;
      case 'pay':
        return styles.usePay;
      default:
        throw new TypeError('Unknown use prop: ' + use);
    }
  }
}

export default UberButton;
