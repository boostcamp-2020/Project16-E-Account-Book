import React from 'react';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import TopNavBar from '@organisms/TopNavBar';
import MyPageUserMenu from '@organisms/MyPageUserMenu';
import MyPageMenu from '@organisms/MyPageMenu';
import AccountBookAcceptModal from '@organisms/AccountBookAcceptModal';
import CreditCardEditModal from '@organisms/CreditCardEditModal';
import UserInfoSettingModal from '@organisms/UserInfoSettingModal';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

const MyPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);
  const userName = useSelector((state: RootState) => state.user.name);
  const userImage = useSelector((state: RootState) => state.user.image);

  return (
    <>
      <BeeBackground />
      <CenterContent>
        <TopNavBar />
        <MyPageUserMenu name={userName} profile={userImage} />
        <MyPageMenu />
      </CenterContent>
      {modalView === 'AccountBookAccept' && <AccountBookAcceptModal />}
      {modalView === 'CreditCardEdit' && <CreditCardEditModal />}
      {modalView === 'UserInfoSetting' && <UserInfoSettingModal />}
    </>
  );
};

export default MyPage;
