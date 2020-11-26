import React from 'react';
import Color from '@theme/color';
import CircleiconButton from './CircleiconButton';

export default {
  title: 'Atoms/button/CircleiconButton',
  component: CircleiconButton,
};

const onClick = (): boolean => {
  return true;
};

export const circleiconButton = (): JSX.Element => {
  const backgroundColor = Color.primary.lightGray;
  return <CircleiconButton backgroundColor={backgroundColor} onClick={onClick} />;
};

circleiconButton.story = {
  name: 'CircleiconButton',
};
