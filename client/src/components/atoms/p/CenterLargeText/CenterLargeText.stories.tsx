import React from 'react';
import CenterLargeText from './CenterLargeText';

export default {
  title: 'Atoms/P/CenterLargeText',
  component: CenterLargeText,
};

export const centerLargeText = (): JSX.Element => {
  return <CenterLargeText>Sample Text</CenterLargeText>;
};

centerLargeText.story = {
  name: 'CenterLargeText',
};
