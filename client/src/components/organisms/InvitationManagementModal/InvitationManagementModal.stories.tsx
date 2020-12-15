import React from 'react';
import InvitationManagementModal from './InvitationManagementModal';

export default {
  title: 'Organisms/InvitationManagementModal',
  component: InvitationManagementModal,
};

export const accountBookAcceptModal = (): JSX.Element => {
  return <InvitationManagementModal />;
};

accountBookAcceptModal.story = {
  name: 'InvitationManagementModal',
};
