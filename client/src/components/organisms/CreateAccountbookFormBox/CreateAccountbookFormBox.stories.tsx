import React from 'react';
import myColor from '@theme/color';
import CreateAccountbookFormBox from './CreateAccountbookFormBox';

export default {
  title: 'Organisms/CreateAccountbookFormBox',
  component: CreateAccountbookFormBox,
};

const testFunc = () => {
  console.log('test');
};

export const createAccountbookFormBox = (): JSX.Element => {
  return <CreateAccountbookFormBox buttonEvent={testFunc} backgroundColor={myColor.primary.main} />;
};

createAccountbookFormBox.story = {
  name: 'CreateAccountbookFormBox',
};
