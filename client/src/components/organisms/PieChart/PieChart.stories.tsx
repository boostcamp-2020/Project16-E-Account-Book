import React from 'react';
import PieChart from './PieChart';

export default {
  title: 'Organisms/PieChart',
  component: PieChart,
};

export const pieChart = (): JSX.Element => {
  const isIncome = true;
  const data = {
    income: [
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
    expenditure: [
      {
        name: '식비',
        money: 95190,
        percent: 100,
      },
    ],
  };
  return <PieChart data={data} isIncome={isIncome} />;
};

pieChart.story = {
  name: 'PieChart',
};
