import React from 'react';
import styled from 'styled-components';

interface Props extends FontProps {
  money: number;
}

interface FontProps {
  fontWeight: string;
  fontSize: string;
  color: string;
}

const ExpenditureText = styled.p<FontProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

const expenditureText: React.FC<Props> = ({ fontWeight, fontSize, color, money }: Props) => {
  const expenditureMoney = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <ExpenditureText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      - {expenditureMoney}
    </ExpenditureText>
  );
};

export default expenditureText;
