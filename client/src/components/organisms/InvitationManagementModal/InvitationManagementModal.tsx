import React from 'react';
import Modal from '@molecules/Modal';
import Card from '@molecules/InvitationCard';
import styled from 'styled-components';
import { Invitation } from '@interfaces/accountbook';

interface Props {
  data: Invitation[];
}

const Container = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

const InvitationManagementModal: React.FC<Props> = ({ data }: Props) => {
  const title = '가계부 승인/거절';

  const callback = () => {
    return true;
  };

  const invitationCards = (invitations: Invitation[]) =>
    invitations.map((invitation) => (
      <Card key={invitation.id} callback={callback} {...invitation} />
    ));

  return (
    <Modal title={title}>
      <Container>{invitationCards(data)}</Container>
    </Modal>
  );
};

export default InvitationManagementModal;
