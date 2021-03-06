import * as React from 'react';
import { ModalContext } from './ModalContext';

import styles = require('./Modal.less');
import classNames from 'classnames';

export class Body extends React.Component {
  public render(): JSX.Element {
    return (
      <ModalContext.Consumer>
        {({ additionalPadding }) => (
          <div
            className={classNames(
              styles.body,
              additionalPadding && styles.bodyAddPadding
            )}
          >
            {this.props.children}
          </div>
        )}
      </ModalContext.Consumer>
    );
  }
}
