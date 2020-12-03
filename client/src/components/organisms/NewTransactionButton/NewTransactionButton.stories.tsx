import React from 'react';
import NewTransactionButton from './NewTransactionButton';

export default {
  title: 'Organisms/NewTransactionButton',
  component: NewTransactionButton,
};

export const newTransactionButton = (): JSX.Element => {
  return <NewTransactionButton />;
};

newTransactionButton.story = {
  name: 'NewTransactionButton',
};
