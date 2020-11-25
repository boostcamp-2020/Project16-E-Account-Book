import React from 'react';
import IconDetailButton from './IconDetailButton';

interface Props {
  name: string;
  color: string;
}

export default {
  title: 'Atoms/Button/IconDetailButton',
  component: IconDetailButton,
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color' },
  },
};

export const csvButton = ({ name, color }: Props): JSX.Element => {
  return <IconDetailButton name={name} color={color} />;
};

export const smsButton = ({ name, color }: Props): JSX.Element => {
  return <IconDetailButton name={name} color={color} />;
};

csvButton.story = {
  name: 'csvButton',
};

csvButton.args = {
  name: 'csv',
  color: '#008C16',
};

smsButton.story = {
  name: 'smsButton',
};

smsButton.args = {
  name: 'sms',
  color: undefined,
};
