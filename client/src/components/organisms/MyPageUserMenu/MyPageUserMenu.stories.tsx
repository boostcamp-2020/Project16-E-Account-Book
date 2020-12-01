import React from 'react';
import MyPageUserMenu from './MyPageUserMenu';

interface Props {
  name: string;
  profile: string;
}

export default {
  title: 'Organisms/MyPageUserMenu',
  component: MyPageUserMenu,
  argTypes: {
    name: { control: 'text' },
    profile: { control: 'text' },
  },
};

export const myPageUserMenu = (props: Props): JSX.Element => {
  return <MyPageUserMenu {...props} />;
};

myPageUserMenu.story = {
  name: 'MyPageUserMenu',
};

myPageUserMenu.args = {
  name: '김도연',
  profile:
    'https://camo.githubusercontent.com/80afeacc15fc9527cacd6a8257613bcc97967d63947bbb8e2f6efe0a2ed8d59d/68747470733a2f2f692e696d6775722e636f6d2f536c7568554c712e6a7067',
};
