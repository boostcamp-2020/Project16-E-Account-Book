import React from 'react';
import myColor from '@theme/color';
import CenterLargeText from './CenterLargeText';

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export default {
  title: 'Atoms/p/CenterLargeText',
  component: CenterLargeText,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
  },
};

export const centerLargeText = ({ ...args }: Props): JSX.Element => {
  return <CenterLargeText {...args}>Sample Text</CenterLargeText>;
};

centerLargeText.story = {
  name: 'CenterLargeText',
};

centerLargeText.args = {
  color: myColor.primary.black,
  fontSize: '24px',
  fontWeight: 'normal',
};
