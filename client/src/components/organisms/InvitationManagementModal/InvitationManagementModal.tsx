import React, { useState, useEffect } from 'react';
import Modal from '@molecules/Modal';
import Card from '@molecules/InvitationCard';
import styled from 'styled-components';
import { Invitation } from '@interfaces/accountbook';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';

const Container = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

const InvitationManagementModal: React.FC = () => {
  const title = '가계부 승인/거절';

  const [invitations, setInvitations] = useState<Invitation[]>([]);

  const getInvitation = async () => {
    const result = await getAxiosData(API.GET_INVITATION);
    setInvitations(result.data);
  };

  useEffect(() => {
    getInvitation();
  }, []);

  const postInvitation = (id: number, isAccept: boolean) => {
    console.log(id, isAccept);
    getInvitation();
    return true;
  };

  const invitationCards = () =>
    invitations.map((invitation) => (
      <Card key={invitation.id} callback={postInvitation} {...invitation} />
    ));

  return (
    <Modal title={title}>
      <Container>{invitationCards()}</Container>
    </Modal>
  );
};

export default InvitationManagementModal;
