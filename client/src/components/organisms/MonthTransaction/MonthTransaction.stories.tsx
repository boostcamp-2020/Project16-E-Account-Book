import React from 'react';
import MonthTransaction from './MonthTransaction';

export default {
  title: 'Organisms/MonthTransaction',
  component: MonthTransaction,
};

export const monthTransaction = (): JSX.Element => {
  return <MonthTransaction dateData="2020-12" monthData={[]} />;
};

monthTransaction.story = {
  name: 'MonthTransaction',
};
