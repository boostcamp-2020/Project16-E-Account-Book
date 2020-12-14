import React from 'react';
import InvitationModal from './InvitationModal';

export default {
  title: 'Organisms/InvitationModal',
  component: InvitationModal,
};

export const invitationModal = (): JSX.Element => {
  return <InvitationModal />;
};

invitationModal.story = {
  name: 'InvitationModal',
};
