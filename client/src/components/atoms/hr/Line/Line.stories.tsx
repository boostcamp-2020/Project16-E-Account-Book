import React from 'react';
import myColor from '@theme/color';
import Line from './Line';

interface Props {
  lineColor?: string;
  widthPercent?: number;
}

export default {
  title: 'Atoms/hr/Line',
  component: Line,
  argTypes: {
    lineColor: { control: 'color' },
    widthPercent: { control: 'number' },
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
};
