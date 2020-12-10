import React from 'react';
import styled from 'styled-components';
import Income from '@atoms/p/IncomeText';
import Expenditure from '@atoms/p/ExpenditureText';
import myColor from '@theme/color';

interface Props extends ColorProps, SizeProps {
  fontWeight: string;
  fontSize: string;
  InMoney: number;
  ExMoney: number;
  inCheck?: boolean;
  exCheck?: boolean;
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
  inCheck: true,
  exCheck: true,
};

const MoneyOfWeek = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${myColor.calendar.border};
  border-radius: 3px;
  font-size: 3px;
  background: ${myColor.calendar.main};
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
  inCheck,
  exCheck,
}: Props) => {
  return (
    <MoneyOfWeek width={width} height={height}>
      주간💰
      {inCheck && (
        <Income fontWeight={fontWeight} fontSize={fontSize} color={InColor} money={InMoney} />
      )}
      {exCheck && (
        <Expenditure fontWeight={fontWeight} fontSize={fontSize} color={ExColor} money={ExMoney} />
      )}
    </MoneyOfWeek>
  );
};

MoneyOfWeek.defaultProps = defaultProps;

export default moneyOfWeek;
