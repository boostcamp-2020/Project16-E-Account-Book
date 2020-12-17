import React, { useState, useEffect } from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import InviteAccountbookCard from '@molecules/InviteAccountbookCard';
import styled from 'styled-components';
import InvitationModal from '@organisms/InvitationModal';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { useHistory } from 'react-router-dom';
import * as API from '@utils/api';
import { getAxiosData, patchAxios } from '@utils/axios';
import CreateAccountbookColorModal from '@organisms/CreateAccountbookColorModal';
import CreateAccountbookSetting from '@organisms/CreateAccountbookSetting';

interface InviteProps {
  links: string[];
  backgroundColor: string;
  name: string;
}

const initArgs: InviteProps = {
  links: [
    'https://user-images.githubusercontent.com/50297117/102187552-770b3700-3ef7-11eb-819d-d24c9792a9d7.png',
  ],
  backgroundColor: myColor.primary.white,
  name: ' ',
};

const AccountbookEditPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const [accountbookMainColor, setAccountbookMainColor] = useState('#FFFFFF');
  const history = useHistory();

  const editButtonClick = async (name: string, description: string) => {
    if (name === '') {
      alert('가계부 이름을 입력해주세요!');
      return;
    }
    const data = {
      name,
      description,
      color: accountbookMainColor,
    };
    await patchAxios(API.PATCH_SOCIAL_ACCOUNTBOOK(accountbookId), data);
    history.push('/');
  };

  const [inviteArgs, setInviteArgs] = useState<InviteProps>(initArgs);

  const initAccountbookCard = async () => {
    const { data } = await getAxiosData(API.GET_SOCIAL_BOOK(accountbookId));
    const newArgs: InviteProps = {
      links: data.images,
      backgroundColor: data.color,
      name: data.name,
    };
    setAccountbookMainColor(data.color);
    setInviteArgs(newArgs);
  };

  useEffect(() => {
    initAccountbookCard();
  }, []);

  const SettingContainer = styled.div`
    width = 100%;
    margin-bottom: 1rem;
  `;

  const getAccountbookMainColor = (color) => {
    setAccountbookMainColor(color);
    inviteArgs.backgroundColor = color;
    setInviteArgs(inviteArgs);
  };

  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <TopNavBar backgroundColor={accountbookMainColor} />
        <CreateAccountbookFormBox
          // eslint-disable-next-line jsx-a11y/aria-role
          role="수정"
          buttonEvent={editButtonClick}
          backgroundColor={accountbookMainColor}
          name=""
          description=""
        />
        <SettingContainer>
          <InviteAccountbookCard {...inviteArgs} />
          <CreateAccountbookSetting labelColor={accountbookMainColor} />
        </SettingContainer>
      </CenterContent>
      {modalView === 'InvitationModal' && <InvitationModal socialId={accountbookId} />}
      {modalView === 'CreateAccountbookColor' && (
        <CreateAccountbookColorModal
          buttonEvent={getAccountbookMainColor}
          currentColor={accountbookMainColor}
        />
      )}
    </>
  );
};

export default AccountbookEditPage;
