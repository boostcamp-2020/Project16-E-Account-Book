import React from 'react';
import TransactionForm from './TransactionForm';

export default {
  title: 'Organisms/TransactionForm',
  component: TransactionForm,
};

export const transactionForm = (): JSX.Element => {
  return <TransactionForm />;
};

transactionForm.story = {
  name: 'TransactionForm',
};
