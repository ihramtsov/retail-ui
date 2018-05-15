import React from 'react';
import { storiesOf } from '@storybook/react';

import UberLink from '../UberLink';

storiesOf('UberLink', module)
  .add('as link', () => <UberLink href="javascript:">I'm a link</UberLink>)
  .add('as button', () => <UberLink>And I'm a button</UberLink>);
