import React, { useState } from 'react';
import styled from 'styled-components';
import MonthNav from '@molecules/MonthNav';
import CheckBoxWithNumber from '@molecules/CheckBoxWithNumber';
import Color from '@theme/color';
import DailyTotal from '@molecules/DailyTotal';
import DailyTransaction from '@molecules/DailyTransaction';

interface Props {
  dateData: string;
  monthData: any;
}

const Filter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MonthTransaction = styled.div`
  border: 2px solid pink;
  border-radius: 5px;
`;

const monthTransaction: React.FC<Props> = ({ dateData, monthData }: Props) => {
  monthData.sort((a, b): any => Number(new Date(b.date)) - Number(new Date(a.date)));

  const [inCheck, setInCheck] = useState(true);
  const [exCheck, setExCheck] = useState(true);
  console.log(dateData);
  const getDailyMoney = (date, flag) => {
    let dailymoney = 0;
    if (flag === true) {
      monthData.forEach((e) => {
        if (date === new Date(e.date).getDate()) {
          dailymoney += e.inmoney;
        }
      });
    } else {
      monthData.forEach((e) => {
        if (date === new Date(e.date).getDate()) {
          dailymoney += e.exmoney;
        }
      });
    }
    return dailymoney;
  };

  const getMonthMoney = (flag) => {
    let monthMoney = 0;
    if (flag === true) {
      monthData.forEach((e) => {
        monthMoney += e.inmoney;
      });
    } else {
      monthData.forEach((e) => {
        monthMoney += e.exmoney;
      });
    }
    return monthMoney;
  };

  let first = 0;
  return (
    <MonthTransaction>
      <MonthNav />
      <Filter>
        <CheckBoxWithNumber
          checked={inCheck}
          color={Color.money.income}
          description="수입"
          onClick={() => setInCheck(!inCheck)}
          fontWeight="bold"
          fontSize="15px"
          money={getMonthMoney(true)}
        />
        <CheckBoxWithNumber
          checked={exCheck}
          color={Color.money.expenditure}
          description="지출"
          onClick={() => setExCheck(!exCheck)}
          fontWeight="bold"
          fontSize="15px"
          money={getMonthMoney(false)}
        />
      </Filter>
      {monthData.map((info) => {
        if (new Date(info.date).getDate() !== first) {
          first = new Date(info.date).getDate();
          return (
            <>
              <DailyTotal
                fontWeight="bold"
                fontSize="15px"
                InMoney={getDailyMoney(first, true)}
                ExMoney={getDailyMoney(first, false)}
                InColor={Color.money.income}
                ExColor={Color.money.expenditure}
                width="100%"
                height="2rem"
                month="2020-10"
                date={first}
              />
              <DailyTransaction data={info} />
            </>
          );
        }
        return <DailyTransaction data={info} />;
      })}
    </MonthTransaction>
  );
};

export default monthTransaction;
