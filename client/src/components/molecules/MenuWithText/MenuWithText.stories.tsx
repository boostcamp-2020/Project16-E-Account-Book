import React from 'react';
import MenuWithText from './MenuWithText';

export default {
  title: 'Molecules/MenuWithText',
  component: MenuWithText,
};

export const menuWithText = (): JSX.Element => {
  return <MenuWithText options={['직장인', '학생']} title="카테고리" />;
};

menuWithText.story = {
  name: 'MenuWithText',
};
