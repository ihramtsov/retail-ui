import React from 'react';
import classNames from 'classnames';

import styles from './Clickable.less';

export interface ClickableProps
  extends React.AnchorHTMLAttributes<HTMLElement>,
    React.ButtonHTMLAttributes<HTMLElement> {
  component?: ClickableComponentType;
}

export type ClickableComponentType =
  | React.ComponentType<ClickableProps>
  | 'a'
  | 'button';

class Clickable extends React.Component<ClickableProps> {
  render() {
    let Component: ClickableComponentType = this.props.href ? 'a' : 'button';
    if (this.props.component) {
      Component = this.props.component;
    }
    return (
      <Component
        {...this.props}
        className={classNames(styles.root, this.props.className)}
      />
    );
  }
}

export default Clickable;
