import React from 'react';
import MyAccountInfoCard from './MyAccountInfoCard';

export default {
  title: 'Organisms/MyAccountInfoCard',
  component: MyAccountInfoCard,
};

interface props {
  link: string;
  info: any;
}

const chipsArgs: props = {
  info: '',
  link:
    'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
};

export const myAccountInfoCard = (): JSX.Element => {
  return <MyAccountInfoCard {...chipsArgs} />;
};

myAccountInfoCard.story = {
  name: 'MyAccountInfoCard',
};
