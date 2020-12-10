import React from 'react';
import styled from 'styled-components';
import { numberToMoney } from '@utils/number';
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
  color: MyColor.money.income,
};

const IncomeText = styled.p<FontProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

const incomeText: React.FC<Props> = ({ fontWeight, fontSize, color, money }: Props) => {
  const incomeMoney = numberToMoney(money);
  return (
    <IncomeText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      {money === -1 ? <br /> : <>+ {incomeMoney}</>}
    </IncomeText>
  );
};

IncomeText.defaultProps = defaultProps;

export default incomeText;
