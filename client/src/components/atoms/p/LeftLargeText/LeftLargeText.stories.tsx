import React from 'react';
import LeftLargeText from './LeftLargeText';

export default {
  title: 'Atoms/P/LeftLargeText',
  component: LeftLargeText,
};

export const leftLargeText = (): JSX.Element => {
  return <LeftLargeText>Sample Text</LeftLargeText>;
};

leftLargeText.story = {
  name: 'LeftLargeText',
};
