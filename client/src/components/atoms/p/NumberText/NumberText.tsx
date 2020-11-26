import React from 'react';
import styled from 'styled-components';
import nTm from '@utils/numberToMoney';

interface Props extends FontProps {
  money: number;
}

interface FontProps {
  fontWeight: string;
  fontSize: string;
  color: string;
}

const NumberText = styled.p<FontProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

const numberText: React.FC<Props> = ({ fontWeight, fontSize, color, money }: Props) => {
  const numberMoney = nTm.number2Money(money);
  return (
    <NumberText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      {numberMoney}
    </NumberText>
  );
};

export default numberText;