import React from 'react';
import NewTransactionButton from '@organisms/NewTransactionButton';
import MonthTransaction from '@organisms/MonthTransaction';

const TransactionPage: React.FC = () => {
  return (
    <>
      <MonthTransaction dateData="2020-12" monthData={[]} />
      <NewTransactionButton />
    </>
  );
};

export default TransactionPage;
