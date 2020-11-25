import React from 'react';
import RightLargeText from './RightLargeText';

export default {
  title: 'Atoms/P/RightLargeText',
  component: RightLargeText,
};

export const rightLargeText = (): JSX.Element => {
  return <RightLargeText>Sample Text</RightLargeText>;
};

rightLargeText.story = {
  name: 'RightLargeText',
};
