import React from 'react';
import myColor from '@theme/color';
import CreateAccountbookFormBox from './CreateAccountbookFormBox';

export default {
  title: 'Organisms/CreateAccountbookFormBox',
  component: CreateAccountbookFormBox,
};

const testFunc = (name: any, description: any) => {
  console.log(name, description);
  return name;
};

export const createAccountbookFormBox = (): JSX.Element => {
  return (
    <CreateAccountbookFormBox
      // eslint-disable-next-line jsx-a11y/aria-role
      role="생성"
      buttonEvent={testFunc('슈퍼가계부', '슈퍼가계부 입니다')}
      backgroundColor={myColor.primary.main}
    />
  );
};

createAccountbookFormBox.story = {
  name: 'CreateAccountbookFormBox',
};
