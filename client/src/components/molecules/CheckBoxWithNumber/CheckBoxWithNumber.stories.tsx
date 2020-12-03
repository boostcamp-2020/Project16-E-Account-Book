import React from 'react';
import CheckBoxWithNumber from './CheckBoxWithNumber';

export default {
  title: 'Molecules/CheckBoxWithNumber',
  component: CheckBoxWithNumber,
};

export const checkBoxWithNumber = (): JSX.Element => {
  return <CheckBoxWithNumber />;
};

checkBoxWithNumber.story = {
  name: 'CheckBoxWithNumber',
};
