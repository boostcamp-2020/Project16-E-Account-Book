import React from 'react';
import StickWithText from './StickWithText';

export default {
  title: 'Molecules/StickWithText',
  component: StickWithText,
};

export const stickWithText = (): JSX.Element => {
  const percent = 70.6;
  const outColor = 'white';
  const inColor = 'pink';
  const width = '400px';
  const height = '40px';
  const name = '저축/비용';
  const money = 32213;
  return (
    <StickWithText
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

stickWithText.story = {
  name: 'StickWithText',
};
