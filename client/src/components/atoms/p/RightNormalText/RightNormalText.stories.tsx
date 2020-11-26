import React from 'react';
import RightNormalText from './RightNormalText';

export default {
  title: 'Atoms/p/RightNormalText',
  component: RightNormalText,
};

export const rightNormalText = (): JSX.Element => {
  return <RightNormalText>Sample Text</RightNormalText>;
};

rightNormalText.story = {
  name: 'RightNormalText',
};
