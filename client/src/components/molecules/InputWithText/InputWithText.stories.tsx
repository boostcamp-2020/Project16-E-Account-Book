import React from 'react';
import InputWithText from './InputWithText';

export default {
  title: 'Molecules/InputWithText',
  component: InputWithText,
};

export const inputWithText = (): JSX.Element => {
  return <InputWithText title="금액" />;
};

inputWithText.story = {
  name: 'InputWithText',
};
