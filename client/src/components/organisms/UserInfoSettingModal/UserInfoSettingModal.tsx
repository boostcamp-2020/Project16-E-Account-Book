import React from 'react';
import Modal from '@molecules/Modal';
import PreparationBox from '@molecules/PreparationBox';

const UserInfoSettingModal: React.FC = () => {
  const title = '개인 정보 변경';

  return (
    <Modal title={title}>
      <PreparationBox>현재 준비중인 서비스 입니다!</PreparationBox>
    </Modal>
  );
};

export default UserInfoSettingModal;
