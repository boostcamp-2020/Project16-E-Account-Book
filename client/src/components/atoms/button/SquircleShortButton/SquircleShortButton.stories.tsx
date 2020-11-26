import React from 'react';
import SquircleShortButton from './SquircleShortButton';

interface Props {
  label: string;
}

export default {
  title: 'Atoms/button/SquircleShortButton',
  component: SquircleShortButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

export const squircleShortButton = ({ label, ...args }: Props): JSX.Element => {
  return <SquircleShortButton {...args}>{label}</SquircleShortButton>;
};

squircleShortButton.story = {
  name: 'SquircleShortButton',
};

squircleShortButton.args = {
  label: '초대하기',
  backgroundColor: undefined,
  color: undefined,
};
