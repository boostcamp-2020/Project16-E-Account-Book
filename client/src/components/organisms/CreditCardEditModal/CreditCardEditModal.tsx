import React from 'react';
import Modal from '@molecules/Modal';

const CreditCardEditModal: React.FC = () => {
  const title = '결제 수단 관리';

  return (
    <Modal title={title}>
      <p>결제 수단 관리 모달입니다</p>
    </Modal>
  );
};

export default CreditCardEditModal;
