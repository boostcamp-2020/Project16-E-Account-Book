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
  return (
    <DayBox
      date={12}
      width={width}
      height={height}
      onClick={onClick}
      InMoney={123221}
      ExMoney={123212}
      InColor={InColor}
      ExColor={ExColor}
      fontWeight={fontWeight}
      fontSize="8px"
    />
  );
};

dayBox.story = {
  name: 'DayBox',
};
