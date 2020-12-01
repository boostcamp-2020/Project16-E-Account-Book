import React from 'react';
import TextArea from './TextArea';

interface Props {
  width: string;
  height: string;
}

export default {
  title: 'Atoms/textarea',
  component: TextArea,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export const textArea = ({ ...args }: Props): JSX.Element => {
  return <TextArea {...args} />;
};

textArea.story = {
  name: 'TextArea',
};

textArea.args = {
  width: '300px',
  height: '120px',
};
