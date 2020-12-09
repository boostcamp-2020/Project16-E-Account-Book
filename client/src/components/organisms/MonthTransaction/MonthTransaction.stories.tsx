import React from 'react';
import MonthTransaction from './MonthTransaction';

export default {
  title: 'Organisms/MonthTransaction',
  component: MonthTransaction,
};
const tempdata = [
  {
    id: 1,
    date: '2020-10-07T15:06:28.000Z',
    inmoney: 15000,
    exmoney: 0,
    payment: null,
    category: '기타수입',
    title: 'test3',
  },
  {
    id: 2,
    date: '2020-10-07T17:06:28.000Z',
    inmoney: 40000,
    exmoney: 0,
    payment: null,
    category: '알바',
    title: '알바비',
  },
  {
    id: 3,
    date: '2020-10-07T11:06:28.000Z',
    inmoney: 0,
    exmoney: 1220,
    payment: '현금',
    category: '떡볶이',
    title: '간식구매',
  },
  {
    id: 4,
    date: '2020-10-07T19:06:28.000Z',
    inmoney: 0,
    exmoney: 12000,
    payment: '신한',
    category: '서적',
    title: '책구매',
  },
];
export const monthTransaction = (): JSX.Element => {
  return <MonthTransaction dateData="2020-12" monthData={tempdata} />;
};

monthTransaction.story = {
  name: 'MonthTransaction',
};
