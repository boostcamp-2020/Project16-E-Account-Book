import React from 'react';
import ExpenditureText from './ExpenditureText';

export default {
  title: 'Atoms/p/ExpenditureText',
  component: ExpenditureText,
};

export const expenditureText = (): JSX.Element => {
  const fontWeight = 'bold';
  const fontSize = '15px';
  const color = 'red';
  const money = 12736817;
  return (
    <ExpenditureText fontWeight={fontWeight} fontSize={fontSize} color={color} money={money} />
  );
};
expenditureText.story = {
  name: 'ExpenditureText',
};
