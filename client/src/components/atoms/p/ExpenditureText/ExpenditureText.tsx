import React from 'react';
import styled from 'styled-components';
import nTm from '@utils/numberToMoney';
import MyColor from '@theme/color';

interface Props extends FontProps {
  money: number;
}

interface FontProps {
  fontWeight: string;
  fontSize: string;
  color: string;
}

const defaultProps = {
  color: MyColor.money.expenditure,
};

const ExpenditureText = styled.p<FontProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

const expenditureText: React.FC<Props> = ({ fontWeight, fontSize, color, money }: Props) => {
  const expenditureMoney = nTm.number2Money(money);
  return (
    <ExpenditureText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      {money === 0 ? <br /> : <>- {expenditureMoney}</>}
    </ExpenditureText>
  );
};

ExpenditureText.defaultProps = defaultProps;

export default expenditureText;
