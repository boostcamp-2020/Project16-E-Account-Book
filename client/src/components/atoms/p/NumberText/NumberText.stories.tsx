import React from 'react';
import NumberText from './NumberText';

export default {
  title: 'Atoms/p/NumberText',
  component: NumberText,
};

export const numberText = (): JSX.Element => {
  const fontWeight = 'bold';
  const fontSize = '15px';
  const color = 'green';
  const money = 21123123;
  return <NumberText fontWeight={fontWeight} fontSize={fontSize} color={color} money={money} />;
};
numberText.story = {
  name: 'NumberText',
};
