import React from 'react';
import TestLogin from './TestLogin';

interface Props {
  size: number;
}

export default {
  title: 'Organisms/TestLogin',
  component: TestLogin,
  argTypes: {
    size: { control: 'number' },
  },
};

export const testLogin = ({ ...args }: Props): JSX.Element => {
  return <TestLogin {...args} />;
};

testLogin.story = {
  name: 'TestLogin',
};

testLogin.args = {
  size: 4,
};
