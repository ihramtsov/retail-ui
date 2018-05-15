import React from 'react';
import { storiesOf } from '@storybook/react';

import Clickable from '../Clickable';

storiesOf('Clickable', module)
  .add('as button', () => <Clickable>I'm a button</Clickable>)
  .add('as link', () => <Clickable href="#">And I'm a link</Clickable>);
