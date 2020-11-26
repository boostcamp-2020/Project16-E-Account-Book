import React from 'react';
import Color from '@theme/color';
import Pencil from '@svg/pencil.svg';
import CircleIconButton from './CircleIconButton';

export default {
  title: 'Atoms/button/CircleiconButton',
  component: CircleIconButton,
};

const onClick = (): boolean => {
  return true;
};

export const circleIconButton = (): JSX.Element => {
  const backgroundColor = Color.primary.lightGray;
  return (
    <CircleIconButton backgroundColor={backgroundColor} onClick={onClick}>
      {Pencil}
    </CircleIconButton>
  );
};

circleIconButton.story = {
  name: 'CircleIconButton',
};
