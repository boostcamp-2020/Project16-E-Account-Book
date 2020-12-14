import React from 'react';
// import myColor from '@theme/color';
import CreateAccountbookSetting from './CreateAccountbookSetting';

interface Props {
  labelColor: string;
}

export default {
  title: 'Organisms/CreateAccountbookSetting',
  component: CreateAccountbookSetting,
  argTypes: {
    labelColor: { control: 'color' },
  },
};

export const createAccountbookSetting = ({ ...args }: Props): JSX.Element => {
  return <CreateAccountbookSetting {...args} />;
};

createAccountbookSetting.story = {
  name: 'CreateAccountbookSetting',
};

createAccountbookSetting.args = {
  labelColor: 'blue',
};
