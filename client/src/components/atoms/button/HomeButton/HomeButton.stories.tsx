import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: 'Atoms/button/HomeButton',
  component: HomeButton,
};

const onClick = (): boolean => {
  return true;
};

export const homeButton = (): JSX.Element => {
  return <HomeButton onClick={onClick} />;
};

homeButton.story = {
  name: 'HomeButton',
};
