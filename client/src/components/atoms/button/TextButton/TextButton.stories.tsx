import React from 'react';
import TextButton from './TextButton';

export default {
  title: 'Atoms/Button/TextButton',
  component: TextButton,
};

export const textButton = () => {
  return <TextButton>모두 지우기</TextButton>;
};

textButton.story = {
  name: 'TextButton',
};
