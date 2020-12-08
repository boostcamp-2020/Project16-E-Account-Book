import React from 'react';
import DailyTransaction from './DailyTransaction';

export default {
  title: 'Molecules/DailyTransaction',
  component: DailyTransaction,
};

export const dailyTransaction = (): JSX.Element => {
  const data = { category: '용돈', title: '심부름', amount: 30000, payment: null };
  return <DailyTransaction data={data} />;
};

dailyTransaction.story = {
  name: 'DailyTransaction',
};
