import React from 'react';
import myColor from '@theme/color';
import CreateAccountbookFormBox from './CreateAccountbookFormBox';

export default {
  title: 'Organisms/CreateAccountbookFormBox',
  component: CreateAccountbookFormBox,
};

const testFunc = (data: any) => {
  console.log(data);
  return data;
};

export const createAccountbookFormBox = (): JSX.Element => {
  return (
    <CreateAccountbookFormBox
      buttonEvent={testFunc('123')}
      backgroundColor={myColor.primary.main}
    />
  );
};

createAccountbookFormBox.story = {
  name: 'CreateAccountbookFormBox',
};
