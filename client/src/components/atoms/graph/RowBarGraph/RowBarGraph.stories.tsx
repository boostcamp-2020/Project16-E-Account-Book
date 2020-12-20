import React from 'react';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import RowBarGraph from './RowBarGraph';

export default {
  title: 'Atoms/graph/RowBarGraph',
  component: RowBarGraph,
  argTypes: {
    maxWidth: { control: 'number' },
    type: { control: 'text' },
    amount: { control: 'number' },
  },
};

interface Props {
  maxWidth: number;
  type: string;
  amount: number;
}

export const rowBarGraph = ({ ...args }: Props): JSX.Element => {
  return (
    <RowFlexContainer width="400px" height="100px">
      <RowBarGraph {...args} />
    </RowFlexContainer>
  );
};

rowBarGraph.story = {
  name: 'RowBarGraph',
};

rowBarGraph.args = {
  maxWidth: 170000,
  type: 'expend',
  amount: 40000,
};
