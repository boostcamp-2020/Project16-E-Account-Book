import React from 'react';
import DateWithText from './DateWithText';

export default {
  title: 'Molecules/DateWithText',
  component: DateWithText,
};

export const dateWithText = (): JSX.Element => {
  return <DateWithText type="time" title="시간" />;
};

dateWithText.story = {
  name: 'DateWithText',
};
