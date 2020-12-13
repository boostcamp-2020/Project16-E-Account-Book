import React, { useState, useEffect } from 'react';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import TopNavBar from '@organisms/TopNavBar';
import MyPageUserMenu from '@organisms/MyPageUserMenu';
import MyPageMenu from '@organisms/MyPageMenu';
import InvitationManagementModal from '@organisms/InvitationManagementModal';
import CreditCardEditModal from '@organisms/CreditCardEditModal';
import UserInfoSettingModal from '@organisms/UserInfoSettingModal';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { Invitation } from '@interfaces/accountbook';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';

const MyPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);
  const userName = useSelector((state: RootState) => state.user.name);
  const userImage = useSelector((state: RootState) => state.user.image);

  const [invitations, setInvitations] = useState<Invitation[]>([]);

  const getInvitation = async () => {
    console.log(API.GET_INVITATION);
    const result = await getAxiosData(API.GET_INVITATION);
    setInvitations(result.data);
  };

  useEffect(() => {
    getInvitation();
  }, []);

  return (
    <>
      <BeeBackground />
      <CenterContent>
        <TopNavBar />
        <MyPageUserMenu name={userName} profile={userImage} />
        <MyPageMenu />
      </CenterContent>
      {modalView === 'AccountBookAccept' && <InvitationManagementModal data={invitations} />}
      {modalView === 'CreditCardEdit' && <CreditCardEditModal />}
      {modalView === 'UserInfoSetting' && <UserInfoSettingModal />}
    </>
  );
};

export default MyPage;
