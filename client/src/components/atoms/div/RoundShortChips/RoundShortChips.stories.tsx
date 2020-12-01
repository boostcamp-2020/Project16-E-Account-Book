import React from 'react';
import myColor from '@theme/color';
import RoundShortChips from './RoundShortChips';

interface Props {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

export default {
  title: 'Atoms/div/RoundShortChips',
  component: RoundShortChips,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

export const roundShortChips = ({ ...args }: Props): JSX.Element => {
  return <RoundShortChips {...args}>검색</RoundShortChips>;
};

roundShortChips.story = {
  name: 'RoundShortChips',
};

roundShortChips.args = {
  backgroundColor: myColor.primary.accent,
  color: myColor.primary.white,
  width: '4rem',
  height: '1.5rem',
  fontSize: '0.8rem',
};
