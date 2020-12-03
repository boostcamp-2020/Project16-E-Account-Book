import React from 'react';
import CreditCard from '@molecules/CreditCard';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props {
  cardNameList: string[];
}

const CreditCardEditCardList: React.FC<Props> = ({ cardNameList }: Props) => {
  return (
    <ColumnFlexContainer width="100%" margin="2rem 0 0 0" justifyContent="space-between">
      {cardNameList.map((cardName) => (
        <CreditCard name={cardName} />
      ))}
    </ColumnFlexContainer>
  );
};

export default CreditCardEditCardList;
