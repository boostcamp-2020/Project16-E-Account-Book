import React from 'react';
import Color from '@theme/color';
import Pencil from '@svg/pencil.svg';
import CircleIconButton from './CircleIconButton';

interface Props {
  backgroundColor: string;
}

export default {
  title: 'Atoms/button/CircleIconButton',
  component: CircleIconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const onClick = (): boolean => {
  return true;
};

export const circleIconButton = ({ ...args }: Props): JSX.Element => {
  return (
    <CircleIconButton {...args} onClick={onClick}>
      {Pencil}
    </CircleIconButton>
  );
};

circleIconButton.story = {
  name: 'CircleIconButton',
};

circleIconButton.args = {
  backgroundColor: Color.primary.lightGray,
};
