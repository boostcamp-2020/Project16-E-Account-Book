import React from 'react';
import ColorLabel from './ColorLabel';

interface Props {
  backgroundColor: string;
  size: string;
  onClick?: () => void;
}

export default {
  title: 'Atoms/div/ColorLabel',
  component: ColorLabel,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'text' },
  },
};

export const colorLabel = ({ ...args }: Props): JSX.Element => {
  return <ColorLabel {...args} />;
};

colorLabel.story = {
  name: 'ColorLabel',
};

colorLabel.args = {
  backgroundColor: 'blue',
  size: '1.5rem',
};
