import React from 'react';
import styled from 'styled-components';
import myColor, { incomeColor, expenditureColor } from '@theme/color';
import StickWithText from '@molecules/StickWithText';
import { getRandomKey } from '@utils/random';
import PreparationBox from '@molecules/PreparationBox';


interface Props {
  data: any;
  isIncome: boolean;
}

const StickChart = styled.div`
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

const stickChart: React.FC<Props> = ({ data, isIncome }: Props) => {
  let maxFourIncome = [];
  let maxFourExpenditure = [];
  if (data.income) {
    maxFourIncome = data.income.slice(0, 4);
  }
  if (data.expenditure) {
    maxFourExpenditure = data.expenditure.slice(0, 4);
  }

  const incomeStick = () =>
    maxFourIncome.map((ele: any, index) => {
      const { name } = ele;
      const money = Number(ele.money);
      const percent = Number(ele.percent);
      const inColor: any = incomeColor[index];
      const outColor = myColor.primary.white;
      const height = '40px';
      const width = '85%';
      return (
        <StickWithText
          key={getRandomKey()}
          name={name}
          money={money}
          percent={percent}
          inColor={inColor}
          outColor={outColor}
          height={height}
          width={width}
        />
      );
    });

  const expenditureStick = () =>
    maxFourExpenditure.map((ele: any, index) => {
      const { name } = ele;
      const money = Number(ele.money);
      const percent = Number(ele.percent);
      const inColor: any = expenditureColor[index];
      const outColor = myColor.primary.white;
      const height = '40px';
      const width = '85%';
      return (
        <StickWithText
          key={getRandomKey()}
          name={name}
          money={money}
          percent={percent}
          inColor={inColor}
          outColor={outColor}
          height={height}
          width={width}
        />
      );
    });

  const checkIncomeValue = () => {
    if (maxFourIncome.length >= 1) {
      return incomeStick();
    }
    return <PreparationBox color={myColor.primary.white}>내역이 없습니다.</PreparationBox>;
  };

  const checkExpenditureValue = () => {
    if (maxFourExpenditure.length >= 1) {
      return expenditureStick();
    }
    return <PreparationBox color={myColor.primary.white}>내역이 없습니다.</PreparationBox>;
  };

  return <StickChart>{isIncome ? checkIncomeValue() : checkExpenditureValue()}</StickChart>;
};

export default stickChart;
