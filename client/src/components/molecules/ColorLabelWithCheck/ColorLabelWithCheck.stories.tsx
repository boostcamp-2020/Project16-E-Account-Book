import React from 'react';
import ColorLabelWithCheck from './ColorLabelWithCheck';

interface Props {
  backgroundColor: string;
  size: string;
  buttonEvent?: () => void;
}

export default {
  title: 'Molecules/ColorLabelWithCheck',
  component: ColorLabelWithCheck,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'text' },
  },
};

export const colorLabelWithCheck = ({ ...args }: Props): JSX.Element => {
  return <ColorLabelWithCheck {...args} />;
};

colorLabelWithCheck.story = {
  name: 'ColorLabelWithCheck',
};

colorLabelWithCheck.args = {
  backgroundColor: 'blue',
  size: '1.5rem',
};
