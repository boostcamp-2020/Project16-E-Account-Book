import React from 'react';
import Line from './Line';

export default {
  title: 'Atoms/hr/Line',
  component: Line,
};

export const iconButton = (): JSX.Element => {
  const widthPercent = 50;
  return <Line widthPercent={widthPercent} />;
};

iconButton.story = {
  name: 'Line',
};
