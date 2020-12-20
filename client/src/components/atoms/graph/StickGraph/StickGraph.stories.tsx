import React from 'react';
import StickGraph from './StickGraph';

export default {
  title: 'Atoms/graph/StickGraph',
  component: StickGraph,
  argTypes: {
    percent: { control: 'number' },
    outColor: { control: 'color' },
    inColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

interface Props extends InProps {
  outColor: string;
  width: string;
  height: string;
}

interface InProps {
  percent?: number;
  inColor?: string;
  height: string;
}

export const stickGraph = ({ ...args }: Props): JSX.Element => {
  return <StickGraph {...args} />;
};

stickGraph.story = {
  name: 'StickGraph',
};

stickGraph.args = {
  percent: 70.6,
  outColor: 'white',
  inColor: 'pink',
  width: '400px',
  height: '40px',
};
