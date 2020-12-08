import React from 'react';
import Calendar from './Calendar';

interface Props {
  dateData: string;
  monthData: any;
}

export default {
  title: 'Organisms/Calendar',
  component: Calendar,
};

export const calendar = ({ dateData, monthData }: Props): JSX.Element => {
  return <Calendar dateData={dateData} monthData={monthData} />;
};

calendar.story = {
  name: 'Calendar',
};

calendar.args = {
  dateData: '2020-12',
};
