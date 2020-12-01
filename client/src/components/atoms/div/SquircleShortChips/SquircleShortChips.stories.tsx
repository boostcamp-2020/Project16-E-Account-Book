import React from 'react';
import myColor from '@theme/color';
import SquircleShortChips from './SquircleShortChips';

interface Props {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

export default {
  title: 'Atoms/div/SquircleShortChips',
  component: SquircleShortChips,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

export const squircleShortChips = ({ ...args }: Props): JSX.Element => {
  return <SquircleShortChips {...args}>초대하기</SquircleShortChips>;
};

squircleShortChips.story = {
  name: 'SquircleShortChips',
};

squircleShortChips.args = {
  backgroundColor: myColor.primary.lightGray,
  color: myColor.primary.accent,
  width: '3rem',
  height: '1.2rem',
  fontSize: '0.3rem',
};
