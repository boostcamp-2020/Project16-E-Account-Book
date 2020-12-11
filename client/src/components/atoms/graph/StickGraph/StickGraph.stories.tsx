import React from 'react';
import StickGraph from './StickGraph';

export default {
  title: 'Atoms/graph/StickGraph',
  component: StickGraph,
};

export const stickGraph = (): JSX.Element => {
  const percent = 70.6;
  const outColor = 'white';
  const inColor = 'pink';
  const width = '400px';
  const height = '40px';
  return (
    <StickGraph
      percent={percent}
      outColor={outColor}
      inColor={inColor}
      width={width}
      height={height}
    />
  );
};

stickGraph.story = {
  name: 'StickGraph',
};
