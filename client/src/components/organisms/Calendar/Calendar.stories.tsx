import React from 'react';
import Calendar from './Calendar';

interface Props {
  dateData: string;
}

export default {
  title: 'Organisms/Calendar',
  component: Calendar,
};

export const calendar = ({ dateData }: Props): JSX.Element => {
  return <Calendar dateData={dateData} />;
};

calendar.story = {
  name: 'Calendar',
};

calendar.args = {
  dateData: '2020-12',
};
