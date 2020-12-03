import React from 'react';
import CreateTransactionHeader from './CreateTransactionHeader';

export default {
  title: 'Organisms/CreateTransactionHeader',
  component: CreateTransactionHeader,
};

export const createTransactionHeader = (): JSX.Element => {
  return <CreateTransactionHeader />;
};

createTransactionHeader.story = {
  name: 'CreateTransactionHeader',
};
