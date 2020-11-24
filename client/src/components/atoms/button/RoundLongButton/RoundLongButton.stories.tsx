import React from 'react';
import RoundLongButton from './RoundLongButton';

export default {
  title: 'Atoms/Button/RoundLongButton',
  component: RoundLongButton,
};

export const roundLongButton = () => {
  return <RoundLongButton>저장</RoundLongButton>;
};

roundLongButton.story = {
  name: 'RoundLongButton',
};
