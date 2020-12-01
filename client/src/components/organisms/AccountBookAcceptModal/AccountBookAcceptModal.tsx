import React from 'react';
import Modal from '@molecules/Modal';

const AccountBookAcceptModal: React.FC = () => {
  const title = '가계부 승인/거절';

  return (
    <Modal title={title}>
      <p>가계부 승인/거절 모달입니다</p>
    </Modal>
  );
};

export default AccountBookAcceptModal;
