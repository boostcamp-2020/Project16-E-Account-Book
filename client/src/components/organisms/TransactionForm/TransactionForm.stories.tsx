import React from 'react';
import TransactionForm from './TransactionForm';

export default {
  title: 'Organisms/TransactionForm',
  component: TransactionForm,
};

export const transactionForm = (): JSX.Element => {
  const onClick = () => {
    return true;
  };
  return (
    <TransactionForm
      categorys={['군것질', '교통비', '회식비']}
      payments={['카카오페이', '현금']}
      onClick={onClick}
      width="290px"
      height="500px"
    />
  );
};

transactionForm.story = {
  name: 'TransactionForm',
};
