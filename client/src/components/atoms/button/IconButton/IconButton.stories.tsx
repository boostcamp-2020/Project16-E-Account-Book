import React from 'react';
import Minus from '@svg/minus.svg';
import IconButton from './IconButton';

export default {
  title: 'Atoms/button/IconButton',
  component: IconButton,
};

const onClick = (): boolean => {
  return true;
};

export const iconButton = (): JSX.Element => {
  return <IconButton onClick={onClick}>{Minus}</IconButton>;
};

iconButton.story = {
  name: 'IconButton',
};
