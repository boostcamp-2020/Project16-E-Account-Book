import React from 'react';
import FourMonthStatistics from './FourMonthStatistics';

export default {
  title: 'Organisms/FourMonthStatistics',
  component: FourMonthStatistics,
};

const data = [
  [170000, 112150],
  [40000, 20000],
  [103322, 323553],
  [19800, 246332],
];

export const fourMonthStatistics = (): JSX.Element => {
  return <FourMonthStatistics data={data} />;
};

fourMonthStatistics.story = {
  name: 'FourMonthStatistics',
};
