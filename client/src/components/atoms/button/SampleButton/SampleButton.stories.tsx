import React from 'react';
import SampleButton from './SampleButton';

export default {
  title: 'Atoms',
  component: [SampleButton],
};

// title 은 상위 폴더가 되고 / 뒤에 내용이 하위 폴더로 추가된다.

export const samplebtn = () => {
  return <SampleButton />;
};

samplebtn.story = {
  name: 'MySampleButton',
};
