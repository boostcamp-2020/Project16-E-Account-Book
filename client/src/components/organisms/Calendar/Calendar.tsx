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

const Filter = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid blue;
`;

const WeeklyDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
`;

const WeekDiv = styled.div`
  display: flex;
  border: 1px solid orange;
`;

const Calendar = styled.div`
  border: 1px solid red;
`;

const calendar: React.FC = () => {
  const firstDay = firstDayOfWeek('2020-2');
  const isSunday = 0;
  const endDays = numberOfMonth('2020-2');
  const [inCheck, setInCheck] = useState(false);
  const [exCheck, setExCheck] = useState(false);
  const onClick = () => {
    return true;
  };
  const daymap = [1, 2, 3, 4, 5, 6, 7];
  const weekmap = [1, 2, 3, 4, 5];
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
  const arr1 = allDay.slice(0, 7);
  const arr2 = allDay.slice(7, 14);
  const arr3 = allDay.slice(14, 21);
  const arr4 = allDay.slice(21, 28);
  const arr5 = allDay.slice(28, 35);
  const allArr = [arr1, arr2, arr3, arr4, arr5];
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
          money={93500}
        />
        <CheckBoxWithNumber
          checked={exCheck}
          color={Color.money.expenditure}
          description="지출"
          onClick={() => setExCheck(!exCheck)}
          fontWeight="bold"
          fontSize="15px"
          money={120000}
        />
      </Filter>
      <Week startDay="일" width="100%" height="100%" color="black" />
      {allArr.map((weeks) => {
        return (
          <WeeklyDiv>
            <MoneyOfWeek
              fontWeight="bold"
              fontSize="15px"
              InMoney={223100}
              ExMoney={10300}
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
