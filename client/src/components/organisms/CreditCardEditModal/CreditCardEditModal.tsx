import React from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import CreditCardEditCardList from '@organisms/CreditCardEditCardList';
import Line from '@atoms/hr/Line';
import myColor from '@theme/color';

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
        <Line widthPercent="110" height="0.25rem" lineColor={myColor.primary.lightGray} />
        <CreditCardEditCardList />
      </ColumnFlexContainer>
    </Modal>
  );
};

export default CreditCardEditModal;
