import React from 'react';
import CreditCardEditCardList from './CreditCardEditCardList';

export default {
  title: 'Organisms/CreditCardEditCardList',
  component: CreditCardEditCardList,
};

export const creditCardEditCardList = (): JSX.Element => {
  return <CreditCardEditCardList />;
};

creditCardEditCardList.story = {
  name: 'CreditCardEditCardList',
};
