import React from 'react';
import Logo from './Logo';

export default {
  title: 'Atoms/img/Logo',
  component: Logo,
};

export const logo = (): JSX.Element => {
  return <Logo />;
};

logo.story = {
  name: 'Logo',
};
