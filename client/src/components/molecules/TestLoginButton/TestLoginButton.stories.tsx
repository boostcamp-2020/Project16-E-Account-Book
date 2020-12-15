import React from 'react';
import TestLoginButton from './TestLoginButton';

interface Props {
  id: number;
}

export default {
  title: 'Molecules/TestLoginButton',
  component: TestLoginButton,
  argTypes: {
    id: { control: 'number' },
  },
};

export const testLoginButton = ({ ...args }: Props): JSX.Element => {
  return <TestLoginButton {...args} />;
};

testLoginButton.story = {
  name: 'TestLoginButton',
};

testLoginButton.args = {
  id: 4,
};
