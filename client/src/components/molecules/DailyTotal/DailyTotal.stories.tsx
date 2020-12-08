import React from 'react';
import MyColor from '@theme/color';
import DailyTotal from './DailyTotal';

interface Props {
  width: string;
  height: string;
}

export default {
  title: 'Molecules/DailyTotal',
  component: DailyTotal,
};

export const dailyTotal = ({ width, height }: Props): JSX.Element => {
  const fontWeight = 'bold';
  const fontSize = '15px';
  const InMoney = 223100;
  const ExMoney = 10300;
  const InColor = MyColor.money.income;
  const ExColor = MyColor.money.expenditure;
  return (
    <DailyTotal
      fontWeight={fontWeight}
      fontSize={fontSize}
      InColor={InColor}
      ExColor={ExColor}
      InMoney={InMoney}
      ExMoney={ExMoney}
      width={width}
      height={height}
    />
  );
};

dailyTotal.story = {
  name: 'DailyTotal',
};
