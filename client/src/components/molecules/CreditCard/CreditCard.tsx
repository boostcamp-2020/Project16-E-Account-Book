import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import CenterNormalText from '@atoms/p/CenterNormalText';
import IconButton from '@atoms/button/IconButton';
import Line from '@atoms/hr/Line';
import MinusIcon from '@svg/minus.svg';
import styled from 'styled-components';

interface Props {
  name: string;
}

const TextContainer = styled.div`
  padding-top: 0.7rem;
  flex: 5;
`;

const IconButtonContainer = styled.div`
  flex: 1;
`;

const CreditCard: React.FC<Props> = ({ name }: Props) => {
  return (
    <ColumnFlexContainer width="100%">
      <RowFlexContainer width="100%" justifyContent="space-around">
        <TextContainer>
          <CenterNormalText>{name}</CenterNormalText>
        </TextContainer>
        <IconButtonContainer>
          <IconButton>{MinusIcon}</IconButton>
        </IconButtonContainer>
      </RowFlexContainer>
      <Line widthPercent="110" margin="0 0.5rem 0 0" />
    </ColumnFlexContainer>
  );
};

export default CreditCard;
