import React, { useState } from 'react';
import styled from 'styled-components';
import { getPastMonthList } from '@utils/date';
import { numberToMoney } from '@utils/number';
import { getRandomKey } from '@utils/random';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import TwoBarGraph from '@atoms/graph/TwoBarGraph';
import myColor from '@theme/color';

type props = {
  data: number[][];
};

const income = 0;
const expend = 1;

const Container = styled.div`
  width: 90%;
  height: 15rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${myColor.primary.black};
  box-shadow: 0px 7px 15px 2px ${myColor.primary.gray};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const InfoBox = styled.div`
  display: flex;
  color: ${myColor.primary.white};
  align-items: center;
  justify-content: space-around;
  font-size: 0.5rem;
  width: 100%;
  height: 50%;
  border-radius: 6px;
  background: linear-gradient(145deg, #2a2929, #323130);
  box-shadow: 5px 5px 10px #1f1e1d, -5px -5px 10px #3f3e3d;
`;
const ConvexMonthBtn = styled.div`
  width: 20%;
  height: 60%;
  color: ${myColor.primary.white};
  border-radius: 10px;
  background: #2f2e2d;
  box-shadow: 5px 5px 10px #171616, -5px -5px 10px #474644;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
`;

const PressedMonthBtn = styled.div`
  width: 20%;
  height: 60%;
  color: ${myColor.primary.white};
  border-radius: 10px;
  background: #2f2e2d;
  box-shadow: inset 5px 5px 8px #131212, inset -5px -5px 8px #4b4a48;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
`;

const FourMonthStatistics: React.FC<props> = ({ data }: props) => {
  let maxHeight = 0;
  const monthList = getPastMonthList(4).reverse();

  const [monthIndex, setMonthIndex] = useState(3);

  const changeMonth = (index) => {
    setMonthIndex(index);
  };
  data.forEach((month) => {
    if (month[income] > maxHeight) maxHeight = month[income];
    if (month[expend] > maxHeight) maxHeight = month[expend];
  });

  return (
    <Container>
      <RowFlexContainer width="100%" height="20%" alignItems="flex-start">
        <InfoBox>
          <p>{`${monthList[monthIndex]}월`}</p>
          <p>{data.length !== 0 ? `수입 : ${numberToMoney(data[monthIndex][income])}` : ''}</p>
          <p>{data.length !== 0 ? `지출 : ${numberToMoney(data[monthIndex][expend])}` : ''}</p>
        </InfoBox>
      </RowFlexContainer>
      <RowFlexContainer width="100%" height="60%">
        {data.map((el) => {
          return (
            <TwoBarGraph maxHeight={maxHeight} income={el[0]} expend={el[1]} key={getRandomKey()} />
          );
        })}
      </RowFlexContainer>
      <RowFlexContainer
        width="100%"
        height="20%"
        justifyContent="space-around"
        alignItems="flex-end"
      >
        {data.map((el, index) => {
          if (monthIndex === index)
            return (
              <PressedMonthBtn
                onClick={() => {
                  changeMonth(index);
                }}
                key={getRandomKey()}
              >
                {monthList[index]}월
              </PressedMonthBtn>
            );
          return (
            <ConvexMonthBtn
              onClick={() => {
                changeMonth(index);
              }}
              key={getRandomKey()}
            >
              {monthList[index]}월
            </ConvexMonthBtn>
          );
        })}
      </RowFlexContainer>
    </Container>
  );
};

export default FourMonthStatistics;
