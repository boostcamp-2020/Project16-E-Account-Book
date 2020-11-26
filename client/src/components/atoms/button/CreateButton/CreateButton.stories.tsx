import React from 'react';
import CreateButton from './CreateButton';

export default {
  title: 'Atoms/button/CreateButton',
  component: [CreateButton],
};

const onClick = (): boolean => {
  return true;
};

export const createButton = (): JSX.Element => {
  return <CreateButton onClick={onClick} />;
};

createButton.story = {
  name: 'CreateButton',
};
