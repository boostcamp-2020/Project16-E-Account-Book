import React from 'react';
import DailyTransactionModal from './DailyTransactionModal';

export default {
  title: 'Organisms/DailyTransactionModal',
  component: DailyTransactionModal,
};
const title = '18일 (수)';

const data = [
  {
    category: '식비',
    payment: '현대카드',
    title: '맥도날드',
    amount: 20000,
  },
  {
    category: '월급',
    payment: null,
    title: '부스트캠프',
    amount: 50000000,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '택시비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '밥값',
    amount: 15360,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
  {
    category: '생활',
    payment: '현대카드',
    title: '버스비',
    amount: 39800,
  },
];

export const dailyTransactionModal = (): JSX.Element => {
  return <DailyTransactionModal month="2020-12" date={3} />;
};

dailyTransactionModal.story = {
  name: 'DailyTransactionModal',
};
