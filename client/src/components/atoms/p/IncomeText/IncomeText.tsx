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

const IncomeText = styled.p<FontProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

const incomeText: React.FC<Props> = ({ fontWeight, fontSize, color, money }: Props) => {
  const incomeMoney = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <IncomeText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      + {incomeMoney}
    </IncomeText>
  );
};

export default incomeText;
