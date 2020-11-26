import React from 'react';
import ToggleButton from './ToggleButton';

interface Props {
  leftButtonName: string;
  rightButtonName: string;
  width: string;
  height: string;
  onClickLeft: () => void;
  onClickRight: () => void;
}

export default {
  title: 'Atoms/div/ToggleButton',
  component: ToggleButton,
  argTypes: {
    leftButtonName: { control: 'leftButtonName' },
    rightButtonName: { control: 'rightButtonName' },
  },
};

export const toggleButton = ({ ...args }: Props): JSX.Element => {
  return <ToggleButton {...args} />;
};

toggleButton.story = {
  name: 'ToggleButton',
};

toggleButton.args = {
  leftButtonName: 'A',
  rightButtonName: 'B',
  onClickLeft: undefined,
  onClickRight: undefined,
  width: '100px',
  height: '50px',
};
