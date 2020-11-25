import React from 'react';
import LeftNormalText from './LeftNormalText';

export default {
  title: 'Atoms/P/LeftNormalText',
  component: LeftNormalText,
};

export const leftNormalText = (): JSX.Element => {
  return <LeftNormalText>Sample Text</LeftNormalText>;
};

leftNormalText.story = {
  name: 'LeftNormalText',
};
