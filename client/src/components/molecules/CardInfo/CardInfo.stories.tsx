import React from 'react';
import CardInfo from './CardInfo';

export default {
  title: 'Molecules/CardInfo',
  component: CardInfo,
};

export const cardInfo = (): JSX.Element => {
  return <CardInfo title="부캠가계부" description="부스트캠프 가계부 입니다" />;
};

cardInfo.story = {
  name: 'CardInfo',
};
