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
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-bottom: 1px solid ${myColor.calendar.border};
  border-radius: 3px;
  box-sizing: border-box;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 0.1rem;
  font-size: 3px;
  color: ${myColor.primary.cancel};
`;

const AmountBox = styled.div`
  display: flex;
  flex-flow: row;
  width: 45%;
  align-items: center;
  justify-content: space-between;
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
      <div>{title}</div>
      <AmountBox>
        <Income fontWeight={fontWeight} fontSize={fontSize} color={InColor} money={InMoney} />
        <Expenditure fontWeight={fontWeight} fontSize={fontSize} color={ExColor} money={ExMoney} />
      </AmountBox>
    </DailyTotal>
  );
};

DailyTotal.defaultProps = defaultProps;

export default dailyTotal;
