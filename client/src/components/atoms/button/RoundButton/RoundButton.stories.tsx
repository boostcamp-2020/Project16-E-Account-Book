import React from 'react';
import RoundButton from './RoundButton';

interface Props {
  label: string;
}

export default {
  title: 'Atoms/Button/RoundButton',
  component: RoundButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

export const roundButton = ({ label, ...args }: Props): JSX.Element => {
  return <RoundButton {...args}>{label}</RoundButton>;
};

roundButton.story = {
  name: 'RoundButton',
};

roundButton.args = {
  label: '수락',
  backgroundColor: undefined,
  color: undefined,
};
