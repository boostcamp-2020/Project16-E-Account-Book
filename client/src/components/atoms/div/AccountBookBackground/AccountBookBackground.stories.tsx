import React from 'react';
import AccountBookBackground from './AccountBookBackground';

export default {
  title: 'Atoms/Button/AccountBookBackground',
  component: [AccountBookBackground],
};

export const accountBookBackground = (): JSX.Element => {
  return <AccountBookBackground />;
};

accountBookBackground.story = {
  name: 'AccountBookBackground',
};
