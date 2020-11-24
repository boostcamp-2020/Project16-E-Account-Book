import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: 'Atoms',
  component: [HomeButton],
};

export const homebtn = () => {
  return <HomeButton />;
};

homebtn.story = {
  name: 'HomeButton',
};
