import React from 'react';
import Modal from '@molecules/Modal';

const UserInfoSettingModal: React.FC = () => {
  const title = '개인 정보 변경';

  return (
    <Modal title={title}>
      <p>개인 정보 변경 모달입니다</p>
    </Modal>
  );
};

export default UserInfoSettingModal;
