import React from 'react';
import MenuWithText from './MenuWithText';

export default {
  title: 'Molecules/MenuWithText',
  component: MenuWithText,
};

export const menuWithText = (): JSX.Element => {
  return (
    <MenuWithText
      options={[
        { id: 1, name: '직장인' },
        { id: 2, name: '학생' },
      ]}
      title="카테고리"
    />
  );
};

menuWithText.story = {
  name: 'MenuWithText',
};
