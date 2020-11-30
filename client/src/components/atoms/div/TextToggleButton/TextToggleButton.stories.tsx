import React from 'react';
import TextToggleButton from './TextToggleButton';

interface Props {
  leftButtonName: string;
  rightButtonName: string;
  width: string;
  height: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default {
  title: 'Atoms/div/TextToggleButton',
  component: TextToggleButton,
  argTypes: {
    leftButtonName: { control: 'text' },
    rightButtonName: { control: 'text' },
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
  onClick: undefined,
  width: '150px',
  height: '50px',
};
