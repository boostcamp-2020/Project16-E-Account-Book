import React from 'react';
import CreateTransactionMenu from './CreateTransactionMenu';

export default {
  title: 'Organisms/CreateTransactionMenu',
  component: CreateTransactionMenu,
};

export const createTransactionMenu = (): JSX.Element => {
  const onClick = () => {
    return true;
  };
  return <CreateTransactionMenu submit={onClick} cancel={onClick} />;
};

createTransactionMenu.story = {
  name: 'CreateTransactionMenu',
};
