import React from 'react';
// import myColor from '@theme/color';
import CreateAccountbookSetting from './CreateAccountbookSetting';

export default {
  title: 'Organisms/CreateAccountbookSetting',
  component: CreateAccountbookSetting,
};

export const createAccountbookSetting = (): JSX.Element => {
  return <CreateAccountbookSetting />;
};

createAccountbookSetting.story = {
  name: 'CreateAccountbookSetting',
};
