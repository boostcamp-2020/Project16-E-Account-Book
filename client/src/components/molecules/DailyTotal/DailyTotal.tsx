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
  date: number;
  month: string;
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

const DailyTotal = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${myColor.calendar.border};
  border-radius: 3px;
  font-size: 3px;
  color: ${myColor.primary.cancel};
`;

const TitleDiv = styled.div`
  flex: 1;
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
  month,
  date,
}: Props) => {
  const dayString = `${month}-${String(date)}`;
  const dateArray = ['일', '월', '화', '수', '목', '금', '토'];
  const title = `${new Date(dayString).getMonth() + 1}월 ${String(date)}일   (${
    dateArray[new Date(dayString).getDay()]
  })`;
  return (
    <DailyTotal width={width} height={height}>
      <TitleDiv>{title}</TitleDiv>
      <Income fontWeight={fontWeight} fontSize={fontSize} color={InColor} money={InMoney} />
      <Expenditure fontWeight={fontWeight} fontSize={fontSize} color={ExColor} money={ExMoney} />
    </DailyTotal>
  );
};

DailyTotal.defaultProps = defaultProps;

export default dailyTotal;
