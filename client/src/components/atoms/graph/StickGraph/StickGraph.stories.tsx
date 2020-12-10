import React from 'react';
import StickGraph from './StickGraph';

export default {
  title: 'Atoms/graph/StickGraph',
  component: StickGraph,
};

export const stickGraph = (): JSX.Element => {
  return <StickGraph />;
};

stickGraph.story = {
  name: 'StickGraph',
};
