import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import CenterNormalText from '@atoms/p/CenterNormalText';
import IconButton from '@atoms/button/IconButton';
import Line from '@atoms/hr/Line';

interface Props {
  name: string;
}

const CreditCard: React.FC<Props> = ({ name }: Props) => {
  return (
    <ColumnFlexContainer width="100%">
      <RowFlexContainer width="100%" margin="2rem 0 0 0 " justifyContent="space-around">
        <CenterNormalText>{name}</CenterNormalText>
        <IconButton>test</IconButton>
      </RowFlexContainer>
      <Line widthPercent="100" margin="2rem 3rem 0 0" />
    </ColumnFlexContainer>
  );
};

export default CreditCard;
