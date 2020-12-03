import React from 'react';
import MonthNav from './MonthNav';

export default {
  title: 'Molecules/MonthNav',
  component: MonthNav,
};

export const monthNav = (): JSX.Element => {
  return <MonthNav />;
};

monthNav.story = {
  name: 'MonthNav',
};
