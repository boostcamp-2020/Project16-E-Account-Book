import React from 'react';
import IconButton from './IconButton';

export default {
  title: 'Atoms/button/IconButton',
  component: IconButton,
};

const onClick = (): boolean => {
  return true;
};

export const iconButton = (): JSX.Element => {
  return <IconButton onClick={onClick} />;
};

iconButton.story = {
  name: 'IconButton',
};
