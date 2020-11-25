import React from 'react';
import SquircleShortChips from './SquircleShortChips';

export default {
  title: 'Atoms/Div/SquircleShortChips',
  component: SquircleShortChips,
};

export const squircleShortChips = (): JSX.Element => {
  return <SquircleShortChips>초대하기</SquircleShortChips>;
};

squircleShortChips.story = {
  name: 'SquircleShortChips',
};
