import React from 'react';
import ColorLabel from './ColorLabel';

interface Props {
  backgroundColor: string;
  width: string;
  height: string;
  onClick?: () => void;
}

export default {
  title: 'Atoms/div/ColorLabel',
  component: ColorLabel,
  argTypes: {
    width: { control: 'width' },
    height: { control: 'height' },
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
  width: '1.5rem',
  height: '1.5rem',
};
