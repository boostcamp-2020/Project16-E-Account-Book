import React from 'react';
import UnderlineText from './UnderlineText';

export default {
  title: 'Atoms/p/UnderlineText',
  component: UnderlineText,
};

export const underlineText = (): JSX.Element => {
  return <UnderlineText>Sample Text</UnderlineText>;
};

underlineText.story = {
  name: 'RightSmallText',
};
