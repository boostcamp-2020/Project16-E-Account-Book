import React from 'react';
import CreditCard from './CreditCard';

interface Props {
  name: string;
}

export default {
  title: 'Molecules/CreditCard',
  component: CreditCard,
  argTypes: {
    name: { control: 'text' },
  },
};

export const creditCard = ({ ...args }: Props): JSX.Element => {
  return <CreditCard {...args} />;
};

creditCard.story = {
  name: 'CreditCard',
};

creditCard.args = {
  name: '신한카드',
};
