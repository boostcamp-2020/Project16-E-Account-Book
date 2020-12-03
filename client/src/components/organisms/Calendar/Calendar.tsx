import React, { useState } from 'react';
import styled from 'styled-components';
import firstDayOfWeek from '@utils/firstDayOfWeek';
// import numberOfMonth from '@utils/numberOfMonth';
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
  const day = firstDayOfWeek('2020-2');
  // const days = numberOfMonth('2020-2');
  const [inCheck, setInCheck] = useState(false);
  const [exCheck, setExCheck] = useState(false);
  const onClick = () => {
    return true;
  };
  const daymap = [1, 2, 3, 4, 5, 6, 7];
  const weekmap = [1, 2, 3, 4, 5, 6];
  const emptyDay = { date: 0, inmoney: 0, exmoney: 0 };
  const allDay = [{}];

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
      {weekmap.map(() => {
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
              {daymap.map((ele) => {
                return (
                  <DayBox
                    date={ele}
                    width="100%"
                    height="100%"
                    onClick={onClick}
                    InMoney={3200}
                    ExMoney={12000}
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
