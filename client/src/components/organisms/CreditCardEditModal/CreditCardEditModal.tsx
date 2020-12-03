import React from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import CreditCardEditCardList from '@organisms/CreditCardEditCardList';

const CreditCardEditModal: React.FC = () => {
  const title = '결제 수단 관리';

  return (
    <Modal title={title}>
      <ColumnFlexContainer
        width="100%"
        height="12rem"
        justifyContent="space-between"
        margin="2rem 0 0 0"
      >
        <CreditCardEditFormBox />
        <CreditCardEditCardList />
      </ColumnFlexContainer>
    </Modal>
  );
};

export default CreditCardEditModal;
