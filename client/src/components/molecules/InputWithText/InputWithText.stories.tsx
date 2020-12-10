import React from 'react';
import InputWithText from './InputWithText';

export default {
  title: 'Molecules/InputWithText',
  component: InputWithText,
};

export const inputWithText = (): JSX.Element => {
  const onChange = () => {
    return true;
  };
  return <InputWithText title="금액" value="" onChange={onChange} />;
};

inputWithText.story = {
  name: 'InputWithText',
};
