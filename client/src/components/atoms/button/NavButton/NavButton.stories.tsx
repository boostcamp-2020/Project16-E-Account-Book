import React from 'react';
import NavButton from './NavButton';

export default {
  title: 'Atoms/button/NavButton',
  component: NavButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    iconColor: { control: 'color' },
    name: { control: 'name' },
  },
};

interface Props extends backgroundColorProps {
  name: string;
  moveUrl: string;
  iconColor?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

interface backgroundColorProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

export const bellButton = ({ ...args }: Props): JSX.Element => {
  return <NavButton {...args} />;
};

export const settingButton = ({ ...args }: Props): JSX.Element => {
  return <NavButton {...args} />;
};

bellButton.story = {
  name: 'bellButton',
};

bellButton.args = {
  moveUrl: '/',
  name: 'bell',
  iconColor: '#7392FF',
};

settingButton.story = {
  name: 'settingButton',
};

settingButton.args = {
  moveUrl: '/',
  name: 'setting',
  iconColor: '#7392FF',
};
