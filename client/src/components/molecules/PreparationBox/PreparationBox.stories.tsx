import React from 'react';
import PreparationBox from './PreparationBox';

export default {
  title: 'molecules/PreparationBox',
  component: PreparationBox,
};

export const preparationBox = (): JSX.Element => {
  return <PreparationBox />;
};

preparationBox.story = {
  name: 'PreparationBox',
};
