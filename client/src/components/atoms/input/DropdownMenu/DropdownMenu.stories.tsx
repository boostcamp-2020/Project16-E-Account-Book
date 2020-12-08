import React from 'react';
import myColor from '@theme/color';
import DropdownMenu from './DropdownMenu';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

export default {
  title: 'Atoms/input/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

export const dropdownMenu = ({ ...args }: Props): JSX.Element => {
  return (
    <DropdownMenu
      {...args}
      options={[
        { id: 1, name: '직장인' },
        { id: 2, name: '학생' },
      ]}
    />
  );
};

dropdownMenu.story = {
  name: 'DropdownMenu',
};

dropdownMenu.args = {
  color: myColor.primary.black,
  width: '8rem',
  height: '1.2rem',
  fontSize: '0.8rem',
};
