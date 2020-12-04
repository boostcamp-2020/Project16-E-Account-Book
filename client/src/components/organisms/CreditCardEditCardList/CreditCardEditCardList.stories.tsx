import React from 'react';
import CreditCardEditCardList from './CreditCardEditCardList';

interface Props {
  cardNameList: string[];
}

export default {
  title: 'Organisms/CreditCardEditCardList',
  component: CreditCardEditCardList,
  argTypes: {
    cardNameList: { control: 'text' },
  },
};

export const creditCardEditCardList = ({ ...args }: Props): JSX.Element => {
  return <CreditCardEditCardList {...args} />;
};

creditCardEditCardList.story = {
  name: 'CreditCardEditCardList',
};

creditCardEditCardList.args = {
  cardNameList: ['신한카드', '하나카드', '농협카드'],
};
