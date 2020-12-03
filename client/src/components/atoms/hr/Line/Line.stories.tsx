import React from 'react';
import myColor from '@theme/color';
import Line from './Line';

interface Props {
  lineColor?: string;
  widthPercent?: string;
  margin?: string;
}

export default {
  title: 'Atoms/hr/Line',
  component: Line,
  argTypes: {
    lineColor: { control: 'color' },
    widthPercent: { control: 'number' },
    margin: { control: 'text' },
  },
};

export const iconButton = ({ ...args }: Props): JSX.Element => {
  return <Line {...args} />;
};

iconButton.story = {
  name: 'Line',
};

iconButton.args = {
  lineColor: myColor.primary.lightGray,
  widthPercent: 80,
  margin: '0 0 0 0',
};
