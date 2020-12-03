import React from 'react';
import myColor from '@theme/color';
import CreateAccountbookFormBox from './CreateAccountbookFormBox';

export default {
  title: 'Organisms/CreateAccountbookFormBox',
  component: CreateAccountbookFormBox,
};

export const createAccountbookFormBox = (): JSX.Element => {
  return <CreateAccountbookFormBox backgroundColor={myColor.primary.main} />;
};

createAccountbookFormBox.story = {
  name: 'CreateAccountbookFormBox',
};
