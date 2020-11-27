import React from 'react';
import TopNavBar from './TopNavBar';

export default {
  title: 'Organisms/TopNavBar',
  component: TopNavBar,
};

export const topNavBar = (): JSX.Element => {
  return <TopNavBar />;
};

topNavBar.story = {
  name: 'TopNavBar',
};
