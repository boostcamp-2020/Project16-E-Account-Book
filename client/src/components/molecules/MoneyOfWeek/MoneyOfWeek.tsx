import React from 'react';
import styled from 'styled-components';
import Income from '@atoms/p/IncomeText';
import Expenditure from '@atoms/p/ExpenditureText';

interface Props extends ColorProps, SizeProps {
  fontWeight: string;
  fontSize: string;
  InMoney: number;
  ExMoney: number;
}

interface ColorProps {
  InColor: string;
  ExColor: string;
}

interface SizeProps {
  width: string;
  height: string;
}

const defaultProps = {
  width: '400px',
  height: '30px',
};

const MoneyOfWeek = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid pink;
  border-radius: 3px;
`;

const moneyOfWeek: React.FC<Props> = ({
  fontWeight,
  fontSize,
  InColor,
  ExColor,
  InMoney,
  ExMoney,
  width,
  height,
}: Props) => {
  return (
    <MoneyOfWeek width={width} height={height}>
      주간
      <Income fontWeight={fontWeight} fontSize={fontSize} color={InColor} money={InMoney} />
      <Expenditure fontWeight={fontWeight} fontSize={fontSize} color={ExColor} money={ExMoney} />
    </MoneyOfWeek>
  );
};

MoneyOfWeek.defaultProps = defaultProps;

export default moneyOfWeek;
