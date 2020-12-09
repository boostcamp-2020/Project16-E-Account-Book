import React from 'react';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import TwoBarGraph from './TwoBarGraph';

export default {
  title: 'Atoms/graph/TwoBarGraph',
  component: TwoBarGraph,
};

export const twoBarGraph = (): JSX.Element => {
  return (
    <RowFlexContainer width="100px" height="400px">
      <TwoBarGraph maxHeight={170000} income={40000} expend={20000} />
    </RowFlexContainer>
  );
};

twoBarGraph.story = {
  name: 'TwoBarGraph',
};
