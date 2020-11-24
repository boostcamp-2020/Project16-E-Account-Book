import React from 'react';
import CreateButton from './CreateButton';

export default {
  title: 'Atoms/button/CreateButton',
  component: [CreateButton],
};

export const createBtn = (): JSX.Element => {
  return <CreateButton onClick={() => {}} />;
};

createBtn.story = {
  name: 'CreateButton',
};
