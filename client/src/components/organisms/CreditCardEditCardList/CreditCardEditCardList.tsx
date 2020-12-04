import React from 'react';
import styled from 'styled-components';
import CreditCard from '@molecules/CreditCard';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props {
  cardNameList: string[];
}

const ScrollDiv = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 90%;
`;

const CreditCardEditCardList: React.FC<Props> = ({ cardNameList }: Props) => {
  return (
    <ColumnFlexContainer width="100%" margin="2rem 0 0 0" justifyContent="space-between">
      <ScrollDiv>
        {cardNameList.map((cardName) => (
          <CreditCard name={cardName} />
        ))}
      </ScrollDiv>
    </ColumnFlexContainer>
  );
};

export default CreditCardEditCardList;
