import React from 'react';
import CenterContent from '@molecules/CenterContent';
import NewTransactionButton from '@organisms/NewTransactionButton';

const TransactionPage: React.FC = () => {
  return (
    <CenterContent>
      <NewTransactionButton />
    </CenterContent>
  );
};

export default TransactionPage;
