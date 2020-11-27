import React from 'react';
import BeeBackground from './BeeBackground';

export default {
  title: 'Organisms/BeeBackground',
  component: BeeBackground,
};

export const beeBackground = (): JSX.Element => {
  return <BeeBackground />;
};

beeBackground.story = {
  name: 'BeeBackground',
};
