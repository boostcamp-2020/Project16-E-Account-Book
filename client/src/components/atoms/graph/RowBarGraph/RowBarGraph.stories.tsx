import React from 'react';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import RowBarGraph from './RowBarGraph';

export default {
  title: 'Atoms/graph/RowBarGraph',
  component: RowBarGraph,
};

export const rowBarGraph = (): JSX.Element => {
  return (
    <RowFlexContainer width="400px" height="100px">
      <RowBarGraph maxWidth={170000} amount={40000} type="expend" />
    </RowFlexContainer>
  );
};

rowBarGraph.story = {
  name: 'RowBarGraph',
};
