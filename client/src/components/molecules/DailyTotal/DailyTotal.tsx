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

const DailyTotal = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid pink;
  border-radius: 3px;
  font-size: 3px;
  color: ${myColor.primary.cancel};
`;

const dailyTotal: React.FC<Props> = ({
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
    <DailyTotal width={width} height={height}>
      <Income fontWeight={fontWeight} fontSize={fontSize} color={InColor} money={InMoney} />
      <Expenditure fontWeight={fontWeight} fontSize={fontSize} color={ExColor} money={ExMoney} />
    </DailyTotal>
  );
};

DailyTotal.defaultProps = defaultProps;

export default dailyTotal;
