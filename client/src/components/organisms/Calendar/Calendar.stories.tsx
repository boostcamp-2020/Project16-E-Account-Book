import React from 'react';
import Calendar from './Calendar';

export default {
  title: 'Organisms/Calendar',
  component: Calendar,
};

export const calendar = (): JSX.Element => {
  return <Calendar />;
};

calendar.story = {
  name: 'Calendar',
};
