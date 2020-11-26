import React from 'react';
import Input from './Input';

export default {
  title: 'Atoms/input/Input',
  component: Input,
};

export const input = (): JSX.Element => {
  return <Input />;
};

input.story = {
  name: 'Input',
};
