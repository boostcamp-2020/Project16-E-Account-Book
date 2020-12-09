import React, { useState } from 'react';
import styled from 'styled-components';
import MonthNav from '@molecules/MonthNav';
import CheckBoxWithNumber from '@molecules/CheckBoxWithNumber';
import Color from '@theme/color';
import DailyTotal from '@molecules/DailyTotal';
import DailyTransaction from '@molecules/DailyTransaction';

interface Props {
  dateData: string;
  monthData: any[];
}

const Filter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MonthTransaction = styled.div`
  border: 1px solid pink;
  border-radius: 5px;
`;

const monthTransaction: React.FC<Props> = ({ dateData, monthData }: Props) => {
  monthData.sort((a, b): any => Number(new Date(b.date)) - Number(new Date(a.date)));
  let nowData: any[] = monthData;
  const incomeData: any[] = [];
  const excomeData: any[] = [];
  monthData.forEach((ele) => {
    if (ele.payment) {
      excomeData.push(ele);
    } else {
      incomeData.push(ele);
    }
  });

  const [inCheck, setInCheck] = useState(true);
  const [exCheck, setExCheck] = useState(true);
  if (inCheck && exCheck) {
    nowData = monthData;
  }
  if (inCheck && !exCheck) {
    nowData = incomeData;
  }
  if (!inCheck && exCheck) {
    nowData = excomeData;
  }
  if (!inCheck && !exCheck) {
    nowData = [];
  }

  const getDailyMoney = (date, flag) => {
    let dailymoney = 0;
    if (flag === true) {
      nowData.forEach((e) => {
        if (date === new Date(e.date).getDate()) {
          dailymoney += e.inmoney;
        }
      });
    } else {
      nowData.forEach((e) => {
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

  let now = 0;
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
      {nowData.map((info) => {
        if (new Date(info.date).getDate() !== now) {
          now = new Date(info.date).getDate();
          return (
            <>
              <DailyTotal
                fontWeight="bold"
                fontSize="15px"
                InMoney={getDailyMoney(now, true)}
                ExMoney={getDailyMoney(now, false)}
                InColor={Color.money.income}
                ExColor={Color.money.expenditure}
                width="100%"
                height="2rem"
                month={dateData}
                date={now}
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
