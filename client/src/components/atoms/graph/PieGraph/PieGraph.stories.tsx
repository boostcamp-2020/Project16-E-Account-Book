import React from 'react';
import { incomeColor } from '@theme/color';
import PieGraph from './PieGraph';

export default {
  title: 'Atoms/graph/PieGraph',
  component: PieGraph,
  argTypes: {
    size: { control: 'number' },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

interface Props extends SVGProps, GroupProps, PathProps {
  data: any;
  colors: string[];
}

interface SVGProps {
  size: number;
}

interface GroupProps {
  fontColor?: string;
}

interface PathProps {
  backgroundColor?: string;
}

export const pieGraph = ({ ...args }: Props): JSX.Element => {
  return <PieGraph {...args} />;
};

pieGraph.story = {
  name: 'PieGraph',
};

pieGraph.args = {
  data: [
    {
      name: '기타수입',
      money: 8480,
      percent: 45.4,
    },
    {
      name: '용돈',
      money: 5400,
      percent: 28.9,
    },
    {
      name: '사업수입',
      money: 4804,
      percent: 25.7,
    },
  ],
  colors: incomeColor,
  size: 500,
  backgroundColor: 'white',
};
