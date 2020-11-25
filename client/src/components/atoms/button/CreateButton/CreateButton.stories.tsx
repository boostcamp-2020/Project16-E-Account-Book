import React from 'react';
import CreateButton from './CreateButton';

export default {
  title: 'Atoms/button/CreateButton',
  component: [CreateButton],
};

export const createButton = (): JSX.Element => {
  return <CreateButton onClick={() => {}} />;
};

createButton.story = {
  name: 'CreateButton',
};
