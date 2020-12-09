import React from 'react';
import DailyTransaction from './DailyTransaction';

export default {
  title: 'Molecules/DailyTransaction',
  component: DailyTransaction,
};

export const dailyTransaction = (): JSX.Element => {
  return (
    <DailyTransaction
      data={{
        id: 1,
        date: '2020-10-07T15:06:28.000Z',
        inmoney: 40000,
        exmoney: 0,
        payment: null,
        category: '기타수입',
        title: 'test3',
      }}
    />
  );
};

dailyTransaction.story = {
  name: 'DailyTransaction',
};
