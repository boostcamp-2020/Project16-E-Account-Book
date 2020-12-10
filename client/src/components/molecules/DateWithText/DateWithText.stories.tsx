import React from 'react';
import DateWithText from './DateWithText';

export default {
  title: 'Molecules/DateWithText',
  component: DateWithText,
};

export const dateWithText = (): JSX.Element => {
  const onChange = () => {
    return true;
  };
  return <DateWithText type="time" title="시간" value="" onChange={onChange} />;
};

dateWithText.story = {
  name: 'DateWithText',
};
