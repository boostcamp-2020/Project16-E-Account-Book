import React from 'react';
import ToggleButton from './ToggleButton';

interface Props {
  leftButtonName: string;
  rightButtonName: string;
  width: string;
  height: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default {
  title: 'Atoms/div/ToggleButton',
  component: ToggleButton,
  argTypes: {
    leftButtonName: { control: 'text' },
    rightButtonName: { control: 'text' },
  },
};

export const toggleButton = ({ ...args }: Props): JSX.Element => {
  return <ToggleButton {...args} />;
};

toggleButton.story = {
  name: 'ToggleButton',
};

toggleButton.args = {
  leftButtonName: '수입',
  rightButtonName: '지출',
  onClick: undefined,
  width: '200px',
  height: '50px',
};
