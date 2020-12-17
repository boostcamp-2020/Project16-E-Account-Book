import React from 'react';
import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import Caution from '@svg/caution.svg';
import CautionMent from '@atoms/p/CenterNormalText';

interface Props {
  color: string;
  children: React.ReactChild;
}

const SVG = styled.img`
  border: 0;
`;

const preparationBox: React.FC<Props> = ({ color, children }: Props) => {
  return (
    <ColumnFlexContainer margin="auto" alignItems="center">
      <SVG src={Caution} alt="caution" />
      <CautionMent color={color}>{children}</CautionMent>
    </ColumnFlexContainer>
  );
};
export default preparationBox;
