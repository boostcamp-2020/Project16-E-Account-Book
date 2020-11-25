import React from 'react';
import LeftSmallText from './LeftSmallText';

export default {
  title: 'Atoms/P/LeftSmallText',
  component: LeftSmallText,
};

export const leftSmallText = (): JSX.Element => {
  return <LeftSmallText>Sample Text</LeftSmallText>;
};

leftSmallText.story = {
  name: 'LeftSmallText',
};
