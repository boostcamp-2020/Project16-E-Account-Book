import React from 'react';
import CircleGraph from './CircleGraph';

interface Props {
  size: number;
  income: number;
  expend: number;
}
export default {
  title: 'Atoms/graph/CircleGraph',
  component: CircleGraph,
  argTypes: {
    size: { control: 'number' },
    income: { control: 'number' },
    expend: { control: 'number' },
  },
};

export const circleGraph = ({ ...args }: Props): JSX.Element => {
  return <CircleGraph {...args} />;
};

circleGraph.story = {
  name: 'CircleGraph',
};

circleGraph.args = {
  size: 10,
  income: 121516,
  expend: 754690,
};
