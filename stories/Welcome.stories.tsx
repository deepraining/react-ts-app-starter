import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Welcome from '../src/components/Welcome';

storiesOf('Welcome', module)
  .add(
    'Welcome JavaScript',
    withInfo({ inline: true })(() => <Welcome name="JavaScript" />),
  )
  .add(
    'Welcome TypeScript',
    withInfo({ inline: true })(() => <Welcome name="TypeScript" />),
  );
