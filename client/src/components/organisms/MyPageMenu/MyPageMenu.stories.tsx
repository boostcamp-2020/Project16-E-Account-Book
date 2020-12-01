import React from 'react';
import MyPageMenu from './MyPageMenu';

export default {
  title: 'Organisms/MyPageMenu',
  component: MyPageMenu,
};

export const myPageMenu = (): JSX.Element => {
  return <MyPageMenu />;
};

myPageMenu.story = {
  name: 'MyPageMenu',
};
