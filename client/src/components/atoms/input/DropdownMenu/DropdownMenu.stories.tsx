import React from 'react';
import DropdownMenu from './DropdownMenu';

export default {
  title: 'Atoms/input/DropdownMenu',
  component: DropdownMenu,
};

export const dropdownMenu = (): JSX.Element => {
  return <DropdownMenu options={['직장인', '학생']} />;
};

dropdownMenu.story = {
  name: 'DropdownMenu',
};
