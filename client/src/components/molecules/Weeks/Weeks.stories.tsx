import React from 'react';
import Weeks from './Weeks';

interface Props {
  startDay: string;
  width: string;
  height: string;
  color: string;
}

export default {
  title: 'Molecules/Weeks',
  component: Weeks,
  argTypes: {
    startDay: {
      control: {
        type: 'select',
        options: ['월', '일'],
      },
    },
  },
};

export const weeks = ({ startDay, width, height, ...args }: Props): JSX.Element => {
  return <Weeks {...args} width={width} height={height} color="black" startDay={startDay} />;
};

weeks.story = {
  name: 'Weeks',
};
