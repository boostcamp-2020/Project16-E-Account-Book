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
  return <TransactionForm onClick={onClick} />;
};

transactionForm.story = {
  name: 'TransactionForm',
};
