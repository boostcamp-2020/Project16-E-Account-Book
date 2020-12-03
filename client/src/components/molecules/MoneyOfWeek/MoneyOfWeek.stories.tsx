import React from 'react';
import MoneyOfWeek from './MoneyOfWeek';

export default {
  title: 'Molecules/MoneyOfWeek',
  component: MoneyOfWeek,
};

export const moneyOfWeek = (): JSX.Element => {
  return <MoneyOfWeek />;
};

moneyOfWeek.story = {
  name: 'MoneyOfWeek',
};
