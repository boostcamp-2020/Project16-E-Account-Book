import React from 'react';
import StickChart from './StickChart';

export default {
  title: 'Organisms/StickChart',
  component: StickChart,
};

export const stickChart = (): JSX.Element => {
  const percent = 70.6;
  const outColor = 'white';
  const inColor = 'pink';
  const width = '400px';
  const height = '40px';
  const name = '저축/비용';
  const money = 32213;
  return (
    <StickChart
      percent={percent}
      outColor={outColor}
      inColor={inColor}
      width={width}
      height={height}
      name={name}
      money={money}
    />
  );
};

stickChart.story = {
  name: 'StickChart',
};
