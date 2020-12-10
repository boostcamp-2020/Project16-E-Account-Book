import React from 'react';
import FiveWeekStatistics from './FiveWeekStatistics';

export default {
  title: 'Organisms/FiveWeekStatistics',
  component: FiveWeekStatistics,
};

const data = {
  income: [0, 300000, 50000, 9900, 0],
  expend: [110000, 90000, 0, 0, 19280],
  dateList: [
    ['2020-12-6', '2020-12-9'],
    ['2020-11-29', '2020-12-5'],
    ['2020-11-22', '2020-11-28'],
    ['2020-11-15', '2020-11-21'],
    ['2020-11-8', '2020-11-14'],
  ],
};

export const fiveWeekStatistics = (): JSX.Element => {
  return <FiveWeekStatistics data={data} isIncome={false} />;
};

fiveWeekStatistics.story = {
  name: 'FiveWeekStatistics',
};
