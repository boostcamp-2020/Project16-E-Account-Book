import React from 'react';
import IncomeText from './IncomeText';

export default {
  title: 'Atoms/p/IncomeText',
  component: IncomeText,
};

export const incomeText = (): JSX.Element => {
  const fontWeight = 'bold';
  const fontSize = '15px';
  const color = 'blue';
  const money = 355555;
  return <IncomeText fontWeight={fontWeight} fontSize={fontSize} color={color} money={money} />;
};
incomeText.story = {
  name: 'IncomeText',
};
