import React from 'react';
import CreateButton from './CreateButton';

export default {
  title: 'Atoms',
  component: [CreateButton],
};

// title 은 상위 폴더가 되고 / 뒤에 내용이 하위 폴더로 추가된다.

export const createBtn = () => {
  return <CreateButton />;
};

createBtn.story = {
  name: 'CreateButton',
};
