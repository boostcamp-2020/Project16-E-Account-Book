import React from 'react';
import TransactionInfo from './TransactionInfo';

export default {
  title: 'Molecules/TransactionInfo',
  component: TransactionInfo,
};

const data = {
  category: '식비',
  payment: null,
  title: '맥도날드',
  amount: 20000,
};

export const transactionInfo = (): JSX.Element => {
  return <TransactionInfo data={data} />;
};

transactionInfo.story = {
  name: 'TransactionInfo',
};
