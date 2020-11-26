import React from 'react';
import CenterNormalText from './CenterNormalText';

export default {
  title: 'Atoms/p/CenterNormalText',
  component: CenterNormalText,
};

export const centerNormalText = (): JSX.Element => {
  return <CenterNormalText>Sample Text</CenterNormalText>;
};

centerNormalText.story = {
  name: 'CenterNormalText',
};
