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
import { showModal } from '@actions/modal/type';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import DailyTransactionModal from '@organisms/DailyTransactionModal';

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

const EmptyBox = styled.div`
  width: 100%;
  height: 3.3rem;
  background: pink;
  border: 1px solid pink;
  box-sizing: border-box;
`;

const calendar: React.FC<Props> = ({ dateData, monthData }: Props) => {
  const dispatch = useDispatch();
  const modalView = useSelector((state: RootState) => state.modal.view);
  const openModal = (view: string) => {
    dispatch(showModal(view));
  };
  const monthlyData = new Map();

  monthData.forEach((e) => {
    const day = new Date(e.date).getDay() - 1;
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

  preprocessData.map((ele) => {
    return Object.assign(allDay[ele.date + emptyDays - 1], ele);
  });
  const allArr = sliceArray(allDay, 7);

  const onClick = (date) => {
    openModal(`${date}Result`);
  };
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
              height="1rem"
              inCheck={inCheck}
              exCheck={exCheck}
            />
            <WeekDiv>
              {weeks.map((day) => {
                if (day.date === 0) {
                  return <EmptyBox />;
                }
                return (
                  <>
                    <DayBox
                      date={day.date}
                      width="100%"
                      height="3.3rem"
                      onClick={() => onClick(day.date)}
                      InMoney={day.inmoney}
                      ExMoney={day.exmoney}
                      InColor={Color.money.income}
                      ExColor={Color.money.expenditure}
                      fontWeight="bold"
                      fontSize="8px"
                      inCheck={inCheck}
                      exCheck={exCheck}
                    />
                    {modalView === `${day.date}Result` && (
                      <DailyTransactionModal month={dateData} date={day.date} />
                    )}
                  </>
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
