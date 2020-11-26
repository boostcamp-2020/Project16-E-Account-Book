import React from 'react';
import TextButton from './TextButton';

interface Props {
  label: string;
}

export default {
  title: 'Atoms/button/TextButton',
  component: TextButton,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
  },
};

export const textButton = ({ label, ...args }: Props): JSX.Element => {
  return <TextButton {...args}>{label}</TextButton>;
};

textButton.story = {
  name: 'TextButton',
};

textButton.args = {
  label: '모두 지우기',
  color: undefined,
};
