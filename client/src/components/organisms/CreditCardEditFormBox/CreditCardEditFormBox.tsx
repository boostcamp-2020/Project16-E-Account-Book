import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftSmallText from '@atoms/p/LeftSmallText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import Line from '@atoms/hr/Line';

const CreditCardEditFormBox: React.FC = () => {
  return (
    <ColumnFlexContainer width="100%" margin="0 0 2rem 0" alignItems="baseline">
      <LeftSmallText>결재 수단 이름</LeftSmallText>
      <RowFlexContainer width="100%" margin="2rem 0 0 0 " justifyContent="space-between">
        <Line widthPercent="100" margin="2rem 3rem 0 0" />
        <RoundShortButton>등록</RoundShortButton>
      </RowFlexContainer>
    </ColumnFlexContainer>
  );
};

export default CreditCardEditFormBox;
