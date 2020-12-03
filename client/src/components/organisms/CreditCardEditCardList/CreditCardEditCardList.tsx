import React from 'react';
import CreditCard from '@molecules/CreditCard';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';

const CreditCardEditCardList: React.FC = () => {
  return (
    <ColumnFlexContainer width="100%" margin="2rem 0 0 0" justifyContent="space-between">
      <CreditCard name="신한카드" />
      <CreditCard name="하나카드" />
      <CreditCard name="농협카드" />
      <CreditCard name="농협카드2" />
      <CreditCard name="농협카드3" />
    </ColumnFlexContainer>
  );
};

export default CreditCardEditCardList;
