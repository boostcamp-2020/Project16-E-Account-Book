import React from 'react';
import RoundButton from './RoundButton';

export default {
  title: 'Atoms/Button/RoundButton',
  component: RoundButton,
};

export const roundButton = () => {
  return <RoundButton>수락</RoundButton>;
};

roundButton.story = {
  name: 'RoundButton',
};
