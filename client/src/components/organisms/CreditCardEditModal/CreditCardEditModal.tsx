import React from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import CenterContent from '@molecules/CenterContent';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import CreditCardEditCardList from '@organisms/CreditCardEditCardList';
/* import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftSmallText from '@atoms/p/LeftSmallText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import Line from '@atoms/hr/Line'; */

const CreditCardEditModal: React.FC = () => {
  const title = '결제 수단 관리';

  return (
    <Modal title={title}>
      <CenterContent>
        <ColumnFlexContainer>
          <CreditCardEditFormBox />
          <CreditCardEditCardList />
        </ColumnFlexContainer>
      </CenterContent>
    </Modal>
  );
};

export default CreditCardEditModal;
