import React from 'react';
import RoundShortButton from './RoundShortButton';

export default {
  title: 'Atoms/Button/RoundShortButton',
  component: RoundShortButton,
};

export const roundShortButton = () => {
  return <RoundShortButton>검색</RoundShortButton>;
};

roundShortButton.story = {
  name: 'RoundShortButton',
};
