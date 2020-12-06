import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: 'Atoms/button/HomeButton',
  component: HomeButton,
};

export const homeButton = (): JSX.Element => {
  return <HomeButton />;
};

homeButton.story = {
  name: 'HomeButton',
};
