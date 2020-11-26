import React from 'react';
import TextToggleButton from './TextToggleButton';

interface Props {
  leftButtonName: string;
  rightButtonName: string;
  width: string;
  height: string;
  onClickLeft: () => void;
  onClickRight: () => void;
}

export default {
  title: 'Atoms/div/TextToggleButton',
  component: TextToggleButton,
  argTypes: {
    leftButtonName: { control: 'leftButtonName' },
    rightButtonName: { control: 'rightButtonName' },
  },
};

export const textToggleButton = ({ ...args }: Props): JSX.Element => {
  return <TextToggleButton {...args} />;
};

textToggleButton.story = {
  name: 'TextToggleButton',
};

textToggleButton.args = {
  leftButtonName: '월요일',
  rightButtonName: '일요일',
  onClickLeft: undefined,
  onClickRight: undefined,
  width: '150px',
  height: '50px',
};
