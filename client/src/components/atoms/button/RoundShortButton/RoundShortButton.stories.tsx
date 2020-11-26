import React from 'react';
import RoundShortButton from './RoundShortButton';

interface Props {
  label: string;
}

export default {
  title: 'Atoms/button/RoundShortButton',
  component: RoundShortButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

export const roundShortButton = ({ label, ...args }: Props): JSX.Element => {
  return <RoundShortButton {...args}>{label}</RoundShortButton>;
};

roundShortButton.story = {
  name: 'RoundShortButton',
};

roundShortButton.args = {
  label: '검색',
  backgroundColor: undefined,
  color: undefined,
};
