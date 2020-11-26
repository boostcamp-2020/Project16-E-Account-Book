import React from 'react';
import CenterSmallText from './CenterSmallText';

export default {
  title: 'Atoms/p/CenterSmallText',
  component: CenterSmallText,
};

export const centerSmallText = (): JSX.Element => {
  return <CenterSmallText>Sample Text</CenterSmallText>;
};

centerSmallText.story = {
  name: 'CenterSmallText',
};
