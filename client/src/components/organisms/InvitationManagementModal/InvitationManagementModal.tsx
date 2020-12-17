import React, { useState, useEffect } from 'react';
import Modal from '@molecules/Modal';
import Card from '@molecules/InvitationCard';
import styled from 'styled-components';
import { Invitation } from '@interfaces/accountbook';
import { getAxiosData, patchAxios } from '@utils/axios';
import * as API from '@utils/api';
import PreparationBox from '@molecules/PreparationBox';
import myColor from '@theme/color';

const Container = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
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

  const postInvitation = async (id: number, isAccept: boolean) => {
    const data = {
      accept: isAccept,
    };
    await patchAxios(API.PATCH_INVITATION(id), data);
    getInvitation();
  };

  const invitationCards = () =>
    invitations.map((invitation) => (
      <Card key={invitation.id} callback={postInvitation} {...invitation} />
    ));
  return (
    <Modal title={title}>
      <Container>
        {invitations.length === 0 ? (
          <PreparationBox color={myColor.primary.black}>내역이 없습니다</PreparationBox>
        ) : (
          invitationCards()
        )}
      </Container>
    </Modal>
  );
};

export default InvitationManagementModal;
