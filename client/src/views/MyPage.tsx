import React from 'react';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import TopNavBar from '@organisms/TopNavBar';
import MyPageUserMenu from '@organisms/MyPageUserMenu';
import MyPageMenu from '@organisms/MyPageMenu';
import Modal from '@molecules/Modal';
import { accountbookClose } from '@actions/modal/type';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

const MyPage: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  // TODO : 실제 로그인 유저의 정보를 받아오기
  const name = '임시 이름';
  const profile =
    'https://camo.githubusercontent.com/80afeacc15fc9527cacd6a8257613bcc97967d63947bbb8e2f6efe0a2ed8d59d/68747470733a2f2f692e696d6775722e636f6d2f536c7568554c712e6a7067';

  const closeModal = () => {
    dispatch(accountbookClose());
  };

  return (
    <>
      <BeeBackground />
      <CenterContent>
        <TopNavBar />
        <MyPageUserMenu name={name} profile={profile} />
        <MyPageMenu />
      </CenterContent>
      {isOpen && (
        <Modal onClick={closeModal}>
          <p>모달입니다!</p>
        </Modal>
      )}
    </>
  );
};

export default MyPage;
