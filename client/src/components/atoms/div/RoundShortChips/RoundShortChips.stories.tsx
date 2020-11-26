import React from 'react';
import RoundShortChips from './RoundShortChips';

export default {
  title: 'Atoms/div/RoundShortChips',
  component: RoundShortChips,
};

export const roundShortChips = (): JSX.Element => {
  return <RoundShortChips>검색</RoundShortChips>;
};

roundShortChips.story = {
  name: 'RoundShortChips',
};
