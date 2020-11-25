import React from 'react';
import RightNormalText from './RightNormalText';

export default {
  title: 'Atoms/P/RightNormalText',
  component: RightNormalText,
};

export const rightNormalText = (): JSX.Element => {
  return <RightNormalText>Sample Text</RightNormalText>;
};

rightNormalText.story = {
  name: 'RightNormalText',
};
