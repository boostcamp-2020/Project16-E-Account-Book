import React from 'react';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import TwoBarGraph from './TwoBarGraph';

export default {
  title: 'Atoms/graph/TwoBarGraph',
  component: TwoBarGraph,
  argTypes: {
    maxHeight: { control: 'number' },
    income: { control: 'number' },
    expend: { control: 'number' },
  },
};

interface Props {
  maxHeight: number;
  income: number;
  expend: number;
}

export const twoBarGraph = ({ ...args }: Props): JSX.Element => {
  return (
    <RowFlexContainer width="100px" height="400px">
      <TwoBarGraph {...args} />
    </RowFlexContainer>
  );
};

twoBarGraph.story = {
  name: 'TwoBarGraph',
};

twoBarGraph.args = {
  maxHeight: 170000,
  income: 40000,
  expend: 20000,
};
