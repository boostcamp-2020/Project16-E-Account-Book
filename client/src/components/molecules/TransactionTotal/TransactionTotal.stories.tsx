import React from 'react';
import TransactionTotal from './TransactionTotal';

export default {
  title: 'Molecules/TransactionTotal',
  component: TransactionTotal,
};

const data = {
  expenditure: 5000000,
  income: 39800,
};

export const transactionTotal = (): JSX.Element => {
  return <TransactionTotal data={data} />;
};

transactionTotal.story = {
  name: 'TransactionTotal',
};
