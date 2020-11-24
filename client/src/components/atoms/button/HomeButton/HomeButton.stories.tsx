import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: 'Atoms/Button/HomeButton',
  component: [HomeButton],
};

const onClick = (): boolean => {
  return true;
};

export const homebtn = (): JSX.Element => {
  return <HomeButton onClick={onClick} />;
};

homebtn.story = {
  name: 'HomeButton',
};
