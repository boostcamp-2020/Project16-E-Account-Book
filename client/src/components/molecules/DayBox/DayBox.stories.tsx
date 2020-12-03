import React from 'react';
import DayBox from './DayBox';

export default {
  title: 'Molecules/DayBox',
  component: DayBox,
};

export const dayBox = ({
  date,
  width,
  height,
  onClick,
  InMoney,
  ExMoney,
  InColor,
  ExColor,
  fontWeight,
  fontSize,
}): JSX.Element => {
  return <DayBox />;
};

dayBox.story = {
  name: 'DayBox',
};
