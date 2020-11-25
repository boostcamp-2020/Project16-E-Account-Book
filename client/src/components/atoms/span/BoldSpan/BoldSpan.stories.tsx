import React from 'react';
import BoldSpan from './BoldSpan';

interface Props {
  label: string;
}

export default {
  title: 'Atoms/Span/BoldSpan',
  component: BoldSpan,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
  },
};

export const boldSpan = ({ label, ...args }: Props): JSX.Element => {
  return <BoldSpan {...args}>{label}</BoldSpan>;
};

boldSpan.story = {
  name: 'BoldSpan',
};

boldSpan.args = {
  label: '사용자명',
  color: undefined,
};
