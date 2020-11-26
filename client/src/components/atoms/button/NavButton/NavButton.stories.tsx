import React from 'react';
import NavButton from './NavButton';

export default {
  title: 'Atoms/button/NavButton',
  component: NavButton,
};

export const bellButton = (): JSX.Element => {
  const moveUrl = '/';
  const name = 'bell';
  const iconColor = '#7392FF';

  return <NavButton moveUrl={moveUrl} name={name} iconColor={iconColor} />;
};

export const settingButton = (): JSX.Element => {
  const moveUrl = '/';
  const name = 'setting';
  const iconColor = '#7392FF';
  return <NavButton moveUrl={moveUrl} name={name} iconColor={iconColor} />;
};

bellButton.story = {
  name: 'bellButton',
};

settingButton.story = {
  name: 'settingButton',
};
