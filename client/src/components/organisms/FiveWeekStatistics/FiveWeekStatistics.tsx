import React from 'react';
import styled from 'styled-components';
import { numberToMoney } from '@utils/number';
import getRandomKey from '@utils/random';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowBarGraph from '@atoms/graph/RowBarGraph';
import myColor from '@theme/color';

type props = {
  data: any;
  isIncome: boolean;
};

const startDate = 0;
const endDate = 1;

const Container = styled.div`
  width: 90%;
  height: 17rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${myColor.primary.black};
  box-shadow: 0px 7px 15px 2px ${myColor.primary.gray};
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  color: ${myColor.primary.white};
  align-items: center;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 20%;
  height: 100%;
  border-radius: 8px;
  background: #2f2e2d;
  box-shadow: 5px 5px 10px #1f1e1d, -5px -5px 10px #3f3e3d;
`;

const TotalBox = styled.div`
  display: flex;
  color: ${myColor.primary.white};
  align-items: center;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 75%;
  height: 100%;
  border-radius: 8px;
  background: #2f2e2d;
  box-shadow: 5px 5px 10px #1f1e1d, -5px -5px 10px #3f3e3d;
`;

const WeekBox = styled.div`
  display: flex;
  justify-content: center;
  color: ${myColor.primary.white};
  align-items: center;
  font-size: 0.1rem;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #2f2e2d;
  box-shadow: 5px 5px 10px #1f1e1d, -5px -5px 10px #3f3e3d;
`;

const changeDateForm = (date: string): string => {
  const ymd = date.split('-');
  const month = 1;
  const day = 2;

  return `${ymd[month]}.${ymd[day]}`;
};

const FiveWeekStatistics: React.FC<props> = ({ data, isIncome }: props) => {
  if (data.expend === undefined) return <></>;
  const totalExpend = data.expend.reduce((acc, curr) => acc + curr);
  const totalIncome = data.income.reduce((acc, curr) => acc + curr);
  const maxExpend = data.expend.reduce((acc, curr) => Math.max(acc, curr));
  const maxIncome = data.income.reduce((acc, curr) => Math.max(acc, curr));

  return (
    <Container>
      <RowFlexContainer width="100%" height="15%" justifyContent="space-between">
        <TitleBox>요약</TitleBox>
        <TotalBox>
          {`총 ${isIncome === true ? '수입' : '지출'} ${numberToMoney(
            isIncome === true ? totalIncome : totalExpend,
          )}원`}
        </TotalBox>
      </RowFlexContainer>
      <ColumnFlexContainer
        width="100%"
        height="75%"
        alignItems="center"
        justifyContent="space-between"
      >
        {data.dateList.map((row, index) => {
          return (
            <RowFlexContainer
              width="100%"
              height="15%"
              key={getRandomKey()}
              justifyContent="space-between"
            >
              <ColumnFlexContainer width="30%" height="100%" justifyContent="space-between">
                <WeekBox>
                  {`${changeDateForm(row[startDate])} ~ ${changeDateForm(row[endDate])}`}
                </WeekBox>
              </ColumnFlexContainer>
              <ColumnFlexContainer width="65%" height="100%" justifyContent="space-between">
                <RowBarGraph
                  maxWidth={isIncome === true ? maxIncome : maxExpend}
                  amount={isIncome === true ? data.income[index] : data.expend[index]}
                  type={isIncome === true ? 'income' : 'expend'}
                />
              </ColumnFlexContainer>
            </RowFlexContainer>
          );
        })}
      </ColumnFlexContainer>
    </Container>
  );
};

export default FiveWeekStatistics;
