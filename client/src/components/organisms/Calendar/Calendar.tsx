/* eslint-disable consistent-return */
import React, { useState } from 'react';
import styled from 'styled-components';
import { firstDayOfWeek, makeMonth, numberOfMonth } from '@utils/date';
import MonthNav from '@molecules/MonthNav';
import CheckBoxWithNumber from '@molecules/CheckBoxWithNumber';
import MoneyOfWeek from '@molecules/MoneyOfWeek';
import Week from '@molecules/Weeks';
import DayBox from '@molecules/DayBox';
import Color from '@theme/color';
import sliceArray from '@utils/sliceArray';
import { showModal } from '@actions/modal/type';
import { getTransaction } from '@actions/transaction/type';
import { useDispatch } from 'react-redux';
import { getRandomKey } from '@utils/random.ts';

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

const Calendar = styled.div``;

const EmptyBox = styled.div`
  width: 100%;
  height: 3.3rem;
`;

const MonthNavMarginBox = styled.div`
width: 100%;
height: 2rem; {/* <TopNavBar /> */
`;

const calendar: React.FC<Props> = ({ dateData, monthData }: Props) => {
  const dispatch = useDispatch();
  const openModal = (view: string) => {
    dispatch(showModal(view));
  };
  const monthlyData = new Map();

  monthData.forEach((e) => {
    const day = new Date(e.date).getDate();
    if (monthlyData.has(day)) {
      const value = monthlyData.get(day);
      monthlyData.set(day, [(value[0] += e.inmoney), (value[1] += e.exmoney)]);
    } else {
      monthlyData.set(day, [e.inmoney, e.exmoney]);
    }
  });

  const firstDay = firstDayOfWeek(dateData);
  const isSunday = 0;
  const endDays = numberOfMonth(dateData);
  const [inCheck, setInCheck] = useState(true);
  const [exCheck, setExCheck] = useState(true);
  const emptyDays = firstDay - isSunday < 0 ? 6 : firstDay - isSunday;
  const allDay = makeMonth([], emptyDays, endDays);

  const preprocessData: Array<{ date: number; inmoney: number; exmoney: number }> = [];
  monthlyData.forEach((value, key) => {
    const buffer: { date: number; inmoney: number; exmoney: number } = {
      date: key,
      inmoney: value[0],
      exmoney: value[1],
    };
    preprocessData.push(buffer);
  });
  // eslint-disable-next-line array-callback-return
  preprocessData.map((ele) => {
    if (allDay[ele.date + emptyDays - 1]) {
      return Object.assign(allDay[ele.date + emptyDays - 1], ele);
    }
  });
  const allArr = sliceArray(allDay, 7);
  const onClick = (thisDay) => {
    dispatch(getTransaction(monthData, thisDay));
    openModal(`${thisDay}Result`);
  };
  return (
    <Calendar>
      <MonthNav />
      <MonthNavMarginBox />
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
          <WeeklyDiv key={getRandomKey()}>
            <MoneyOfWeek
              fontWeight="bold"
              fontSize="12px"
              InMoney={weeks.reduce((acc, cur) => acc + cur.inmoney, 0)}
              ExMoney={weeks.reduce((acc, cur) => acc + cur.exmoney, 0)}
              InColor={Color.money.income}
              ExColor={Color.money.expenditure}
              width="100%"
              height="1rem"
              inCheck={inCheck}
              exCheck={exCheck}
            />
            <WeekDiv>
              {weeks.map((day) => {
                if (day.date === 0) {
                  return <EmptyBox key={getRandomKey()} />;
                }
                return (
                  <DayBox
                    key={getRandomKey()}
                    date={day.date}
                    width="100%"
                    height="3.8rem"
                    onClick={() => onClick(day.date)}
                    InMoney={day.inmoney === 0 ? -1 : day.inmoney}
                    ExMoney={day.exmoney === 0 ? -1 : day.exmoney}
                    InColor={Color.money.income}
                    ExColor={Color.money.expenditure}
                    fontWeight="bold"
                    fontSize="8px"
                    inCheck={inCheck}
                    exCheck={exCheck}
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
