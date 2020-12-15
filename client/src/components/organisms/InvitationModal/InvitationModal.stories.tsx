import React from 'react';
import InvitationModal from './InvitationModal';

export default {
  title: 'Organisms/InvitationModal',
  component: InvitationModal,
};

export const invitationModal = (): JSX.Element => {
  const id = 2;
  return <InvitationModal socialId={id} />;
};

invitationModal.story = {
  name: 'InvitationModal',
};
