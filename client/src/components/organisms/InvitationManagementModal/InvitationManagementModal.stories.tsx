import React from 'react';
import InvitationManagementModal from './InvitationManagementModal';

export default {
  title: 'Organisms/InvitationManagementModal',
  component: InvitationManagementModal,
};

export const accountBookAcceptModal = (): JSX.Element => {
  const data = [
    {
      id: 2,
      time: '2020-12-13T18:15:38.000Z',
      name: '클리어',
      master: '김도연',
    },
    {
      id: 4,
      time: '2020-12-10T13:15:38.000Z',
      name: '밥.좋.아',
      master: 'Je Koo Park',
    },
    {
      id: 8,
      time: '2020-12-01T13:24:38.000Z',
      name: '링가링가링',
      master: '이지우',
    },
    {
      id: 5,
      time: '2020-11-13T13:15:38.000Z',
      name: '오므라이스',
      master: '장준영',
    },
  ];

  return <InvitationManagementModal data={data} />;
};

accountBookAcceptModal.story = {
  name: 'InvitationManagementModal',
};
