import React from 'react';
import myColor from '@theme/color';
import PieGraph from './PieGraph';

export default {
  title: 'Atoms/graph/PieGraph',
  component: PieGraph,
};

export const pieGraph = (): JSX.Element => {
  const incomeData = [
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
  ];

  const incomeColor = [
    myColor.statistic.incomeOne,
    myColor.statistic.incomeTwo,
    myColor.statistic.incomeThree,
    myColor.statistic.incomeFour,
  ];
  return <PieGraph data={incomeData} colors={incomeColor} />;
};

pieGraph.story = {
  name: 'PieGraph',
};
