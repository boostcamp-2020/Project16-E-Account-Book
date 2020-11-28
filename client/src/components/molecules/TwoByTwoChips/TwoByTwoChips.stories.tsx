import React from 'react';
import TwoByTwoChips from './TwoByTwoChips';

export default {
  title: 'Molecules/TwoByTwoChips',
  component: TwoByTwoChips,
};

interface props {
  categoryList: Array<string>;
  amountList: Array<number>;
}

const chipsArgs: props = {
  categoryList: ['여가', '외식', '쇼핑', '교통'],
  amountList: [80000, 50000, 17500, 12980],
};

export const twoByTwoChips = (): JSX.Element => {
  return <TwoByTwoChips {...chipsArgs} />;
};

twoByTwoChips.story = {
  name: 'TwoByTwoChips',
};
