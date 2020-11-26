import React from 'react';
import LightYellowBox from './LightYellowBox';

export default {
  title: 'Atoms/div/LightYellowBox',
  component: LightYellowBox,
};

export const lightYellowBox = (): JSX.Element => {
  return <LightYellowBox />;
};

lightYellowBox.story = {
  name: 'LightYellowBox',
};
