import React from 'react';
import NavButton from './NavButton';

export default {
  title: 'Atoms/button/NavButton',
  component: NavButton,
};

export const navButton = (): JSX.Element => {
  const backgroundColor = '#F4C239';
  const moveUrl = '/';
  return <NavButton background-color={backgroundColor} moveUrl={moveUrl} />;
};

navButton.story = {
  name: 'NavButton',
};
