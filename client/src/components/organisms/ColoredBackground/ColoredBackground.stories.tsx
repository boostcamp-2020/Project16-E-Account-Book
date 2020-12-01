import React from 'react';
import myColor from '@theme/color';
import ColoredBackground from './ColoredBackground';

export default {
  title: 'Organisms/ColoredBackground',
  component: ColoredBackground,
};

export const coloredBackground = (): JSX.Element => {
  return <ColoredBackground backgroundColor={myColor.primary.lightGray} />;
};

coloredBackground.story = {
  name: 'ColoredBackground',
};
