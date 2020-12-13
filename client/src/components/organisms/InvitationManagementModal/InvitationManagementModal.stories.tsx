import React from 'react';
import InvitationManagementModal from './InvitationManagementModal';

export default {
  title: 'Organisms/AccountBookAcceptModal',
  component: InvitationManagementModal,
};

export const accountBookAcceptModal = (): JSX.Element => {
  return <InvitationManagementModal />;
};

accountBookAcceptModal.story = {
  name: 'AccountBookAcceptModal',
};
