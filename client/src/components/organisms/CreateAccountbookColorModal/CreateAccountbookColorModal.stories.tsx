import React from 'react';
import CreateAccountbookColorModal from './CreateAccountbookColorModal';

export default {
  title: 'Organisms/CreateAccountbookColorModal',
  component: CreateAccountbookColorModal,
};

export const createAccountbookColorModal = (): JSX.Element => {
  return <CreateAccountbookColorModal currentColor="blue" />;
};

createAccountbookColorModal.story = {
  name: 'CreateAccountbookColorModal',
};
