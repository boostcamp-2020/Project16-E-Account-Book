import React from 'react';
import AccountBookBackground from './AccountBookBackground';

interface Props {
  backgroundColor: string;
}

export default {
  title: 'Atoms/div/AccountBookBackground',
  component: AccountBookBackground,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const accountBookBackground = ({ backgroundColor }: Props): JSX.Element => {
  return <AccountBookBackground backgroundColor={backgroundColor} />;
};

accountBookBackground.story = {
  name: 'AccountBookBackground',
};

accountBookBackground.args = {
  backgroundColor: undefined,
};
