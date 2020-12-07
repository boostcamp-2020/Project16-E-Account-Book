import React, { useState } from 'react';
import styled from 'styled-components';
import firstDayOfWeek from '@utils/firstDayOfWeek';
import numberOfMonth from '@utils/numberOfMonth';
import makeMonth from '@utils/makeMonth';
import MonthNav from '@molecules/MonthNav';
import CheckBoxWithNumber from '@molecules/CheckBoxWithNumber';
import MoneyOfWeek from '@molecules/MoneyOfWeek';
import Week from '@molecules/Weeks';
import DayBox from '@molecules/DayBox';
import Color from '@theme/color';
import sliceArray from '@utils/sliceArray';

interface Props {
  dateData: string;
  monthData: any;
}

const Filter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WeeklyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeekDiv = styled.div`
  display: flex;
`;

const Calendar = styled.div`
  border: 2px solid pink;
  border-radius: 5px;
`;

const calendar: React.FC<Props> = ({ dateData, monthData }: Props) => {
  monthData.forEach((e) => {
    // e.date = parseInt(String(e.date).substring(6), 10);
    const date = new Date(e.date);
    console.log(date.getDay() - 1);
  });
  console.log(monthData);
  const firstDay = firstDayOfWeek(dateData);
  const isSunday = 0;
  const endDays = numberOfMonth(dateData);
  const [inCheck, setInCheck] = useState(false);
  const [exCheck, setExCheck] = useState(false);
  const onClick = () => {
    return true;
  };
  const emptyDays = firstDay - isSunday < 0 ? 6 : firstDay - isSunday;
  const allDay = makeMonth([], emptyDays, endDays);
  const tempData = [
    { date: 3, inmoney: 1200, exmoney: 0 },
    { date: 11, inmoney: 13000, exmoney: 4300 },
    { date: 14, inmoney: 0, exmoney: 12500 },
    { date: 23, inmoney: 3200, exmoney: 1600 },
    { date: 26, inmoney: 43900, exmoney: 0 },
  ];
  tempData.map((ele) => {
    return Object.assign(allDay[ele.date + emptyDays - 1], ele);
  });
  const allArr = sliceArray(allDay, 7);
  return (
    <Calendar>
      <MonthNav />
      <Filter>
        <CheckBoxWithNumber
          checked={inCheck}
          color={Color.money.income}
          description="수입"
          onClick={() => setInCheck(!inCheck)}
          fontWeight="bold"
          fontSize="15px"
          money={allDay.reduce((acc, cur) => acc + cur.inmoney, 0)}
        />
        <CheckBoxWithNumber
          checked={exCheck}
          color={Color.money.expenditure}
          description="지출"
          onClick={() => setExCheck(!exCheck)}
          fontWeight="bold"
          fontSize="15px"
          money={allDay.reduce((acc, cur) => acc + cur.exmoney, 0)}
        />
      </Filter>
      <Week startDay="일" width="100%" height="100%" color="black" />
      {allArr.map((weeks) => {
        return (
          <WeeklyDiv>
            <MoneyOfWeek
              fontWeight="bold"
              fontSize="15px"
              InMoney={weeks.reduce((acc, cur) => acc + cur.inmoney, 0)}
              ExMoney={weeks.reduce((acc, cur) => acc + cur.exmoney, 0)}
              InColor={Color.money.income}
              ExColor={Color.money.expenditure}
              width="100%"
              height="100%"
            />
            <WeekDiv>
              {weeks.map((day) => {
                return (
                  <DayBox
                    date={day.date}
                    width="100%"
                    height="100%"
                    onClick={onClick}
                    InMoney={day.inmoney}
                    ExMoney={day.exmoney}
                    InColor={Color.money.income}
                    ExColor={Color.money.expenditure}
                    fontWeight="bold"
                    fontSize="8px"
                  />
                );
              })}
            </WeekDiv>
          </WeeklyDiv>
        );
      })}
    </Calendar>
  );
};

export default calendar;
