import React from 'react';
import CardNumberText from './CardNumberText';

export default {
  title: 'Molecules/CardNumberText',
  component: CardNumberText,
};

export const cardNumberText = (): JSX.Element => {
  return <CardNumberText fontSize="15px" inMoney={321321} exMoney={213124} />;
};

cardNumberText.story = {
  name: 'CardNumberText',
};
