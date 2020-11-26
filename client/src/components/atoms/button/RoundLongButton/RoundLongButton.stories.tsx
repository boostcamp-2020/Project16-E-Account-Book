import React from 'react';
import RoundLongButton from './RoundLongButton';

interface Props {
  label: string;
}

export default {
  title: 'Atoms/button/RoundLongButton',
  component: RoundLongButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

export const roundLongButton = ({ label, ...args }: Props): JSX.Element => {
  return <RoundLongButton {...args}>{label}</RoundLongButton>;
};

roundLongButton.story = {
  name: 'RoundLongButton',
};

roundLongButton.args = {
  label: '저장',
  backgroundColor: undefined,
  color: undefined,
};
