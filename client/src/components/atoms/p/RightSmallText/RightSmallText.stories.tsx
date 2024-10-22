import React from 'react';
import RightSmallText from './RightSmallText';

export default {
  title: 'Atoms/p/RightSmallText',
  component: RightSmallText,
};

export const rightSmallText = (): JSX.Element => {
  return <RightSmallText>Sample Text</RightSmallText>;
};

rightSmallText.story = {
  name: 'RightSmallText',
};
