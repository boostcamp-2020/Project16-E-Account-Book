import React from 'react';
import SquircleShortButton from './SquircleShortButton';

export default {
  title: 'Atoms/Button/SquircleShortButton',
  component: [SquircleShortButton],
};

export const squircleShortButton = (): JSX.Element => {
  return <SquircleShortButton>초대하기</SquircleShortButton>;
};

squircleShortButton.story = {
  name: 'SquircleShortButton',
};
