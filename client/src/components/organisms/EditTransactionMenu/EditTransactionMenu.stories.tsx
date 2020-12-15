import React from 'react';
import EditTransactionMenu from './EditTransactionMenu';

export default {
  title: 'Organisms/EditTransactionMenu',
  component: EditTransactionMenu,
};

export const editTransactionMenu = (): JSX.Element => {
  const onClick = () => {
    return true;
  };
  return <EditTransactionMenu remove={onClick} cancel={onClick} />;
};

editTransactionMenu.story = {
  name: 'EditTransactionMenu',
};
