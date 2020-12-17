import React from 'react';
import PreparationBox from './PreparationBox';

interface Props {
  children: React.ReactChild;
}

export default {
  title: 'molecules/PreparationBox',
  component: PreparationBox,
  argTypes: {
    children: { control: 'text' },
  },
};

export const preparationBox = ({ children }: Props): JSX.Element => {
  return <PreparationBox color="black">{children}</PreparationBox>;
};

preparationBox.story = {
  name: 'PreparationBox',
};

preparationBox.args = {
  children: '현재 준비중인 페이지 입니다!',
};
