import React from 'react';
import MyColor from '@theme/color';
import MoneyOfWeek from './MoneyOfWeek';

interface Props {
  width: string;
  height: string;
}

export default {
  title: 'Molecules/MoneyOfWeek',
  component: MoneyOfWeek,
};

export const moneyOfWeek = ({ width, height }: Props): JSX.Element => {
  const fontWeight = 'bold';
  const fontSize = '15px';
  const InMoney = 223100;
  const ExMoney = 10300;
  const InColor = MyColor.money.income;
  const ExColor = MyColor.money.expenditure;
  return (
    <MoneyOfWeek
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

moneyOfWeek.story = {
  name: 'MoneyOfWeek',
};
