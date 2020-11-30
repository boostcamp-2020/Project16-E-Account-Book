import React from 'react';
import myColor from '@theme/color';
import CenterSmallText from './CenterSmallText';

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export default {
  title: 'Atoms/p/CenterSmallText',
  component: CenterSmallText,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
  },
};

export const centerSmallText = ({ ...args }: Props): JSX.Element => {
  return <CenterSmallText {...args}>Sample Text</CenterSmallText>;
};

centerSmallText.story = {
  name: 'CenterSmallText',
};

centerSmallText.args = {
  color: myColor.primary.black,
  fontSize: '12px',
  fontWeight: 'normal',
};
