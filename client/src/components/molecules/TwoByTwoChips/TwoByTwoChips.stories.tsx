import React from 'react';
import TwoByTwoChips from './TwoByTwoChips';

export default {
  title: 'Molecules/TwoByTwoChips',
  component: TwoByTwoChips,
};

export const twoByTwoChips = (): JSX.Element => {
  const data = [
    { money: '102000', name: '식비' },
    { money: '90000', name: '술/유흥' },
    { money: '8000', name: '카페/간식' },
  ];
  return <TwoByTwoChips data={data} />;
};

twoByTwoChips.story = {
  name: 'TwoByTwoChips',
};
