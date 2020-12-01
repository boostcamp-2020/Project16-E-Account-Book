import React from 'react';
import myColor from '@theme/color';
import Input from './Input';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

export default {
  title: 'Atoms/input/Input',
  component: Input,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

export const input = ({ ...args }: Props): JSX.Element => {
  return <Input {...args} />;
};

input.story = {
  name: 'Input',
};

input.args = {
  color: myColor.primary.black,
  width: '8rem',
  height: '1rem',
  fontSize: '0.8rem',
};
