import React from 'react';
import MyAccountInfoCard from './MyAccountInfoCard';

export default {
  title: 'Organisms/MyAccountInfoCard',
  component: MyAccountInfoCard,
};

interface props {
  categoryList: Array<string>;
  amountList: Array<number>;
  income: number;
  expend: number;
  link: string;
}

const chipsArgs: props = {
  categoryList: ['여가', '외식', '쇼핑', '교통'],
  amountList: [80000, 50000, 17500, 12980],
  income: 243943,
  expend: 467443,
  link:
    'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
};

export const myAccountInfoCard = (): JSX.Element => {
  return <MyAccountInfoCard {...chipsArgs} />;
};

myAccountInfoCard.story = {
  name: 'MyAccountInfoCard',
};
