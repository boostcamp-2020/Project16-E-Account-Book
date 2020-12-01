import React from 'react';
import myColor from '@theme/color';
import SquircleCard from './SquircleCard';

interface Props {
  backgroundColor?: string;
  width?: string;
  height?: string;
  flexFlow?: string;
}

export default {
  title: 'Atoms/div/SquircleCard',
  component: SquircleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    flexFlow: { control: 'text' },
  },
};

export const squircleCard = ({ ...args }: Props): JSX.Element => {
  return <SquircleCard {...args}>SquircleCard</SquircleCard>;
};

squircleCard.story = {
  name: 'SquircleCard',
};

squircleCard.args = {
  backgroundColor: myColor.primary.main,
  width: '500px',
  height: '120px',
  flexFlow: 'row',
};
