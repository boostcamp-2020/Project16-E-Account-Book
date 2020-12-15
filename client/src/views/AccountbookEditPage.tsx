import React, { useState, useEffect } from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import InviteAccountbookCard from '@molecules/InviteAccountbookCard';
import colorUtils from '@utils/color';
import styled from 'styled-components';
import InvitationModal from '@organisms/InvitationModal';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import * as API from '@utils/api';
import { getAxiosData } from '../utils/axios';

interface InviteProps {
  links: string[];
  backgroundColor: string;
  name: string;
}

const initArgs: InviteProps = {
  links: [
    'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
  ],
  backgroundColor: myColor.primary.white,
  name: ' ',
};

const AccountbookEditPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const createButtonClick = async (data: any) => {
    console.log(data);
  };

  const backgroundColor = colorUtils.getRandomColor();
  const [inviteArgs, setInviteArgs] = useState<any>(initArgs);

  const initAccountbookCard = async () => {
    const { data } = await getAxiosData(API.GET_SOCIAL_BOOK(accountbookId));
    const newArgs: InviteProps = {
      links: data.images,
      backgroundColor: data.color,
      name: data.name,
    };
    setInviteArgs(newArgs);
  };

  useEffect(() => {
    initAccountbookCard();
  }, []);

  const SettingContainer = styled.div`
    width = 100%;
    margin-bottom: 1rem;
  `;

  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <TopNavBar backgroundColor={backgroundColor} />
        <CreateAccountbookFormBox
          buttonEvent={createButtonClick}
          backgroundColor={backgroundColor}
        />
        <SettingContainer>
          <InviteAccountbookCard {...inviteArgs} />
        </SettingContainer>
      </CenterContent>
      {modalView === 'InvitationModal' && <InvitationModal socialId={accountbookId} />}
    </>
  );
};

export default AccountbookEditPage;
