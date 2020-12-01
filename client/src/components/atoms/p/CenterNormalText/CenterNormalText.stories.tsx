import React from 'react';
import myColor from '@theme/color';
import CenterNormalText from './CenterNormalText';

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export default {
  title: 'Atoms/p/CenterNormalText',
  component: CenterNormalText,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
  },
};

export const centerNormalText = ({ ...args }: Props): JSX.Element => {
  return <CenterNormalText {...args}>Sample Text</CenterNormalText>;
};

centerNormalText.story = {
  name: 'CenterNormalText',
};

centerNormalText.args = {
  color: myColor.primary.black,
  fontSize: '24px',
  fontWeight: 'normal',
};
