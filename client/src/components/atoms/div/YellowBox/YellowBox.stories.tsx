import React from 'react';
import YellowBox from './YellowBox';

export default {
  title: 'Atoms/div/YellowBox',
  component: YellowBox,
};

export const yellowBox = (): JSX.Element => {
  return <YellowBox />;
};

yellowBox.story = {
  name: 'YellowBox',
};
