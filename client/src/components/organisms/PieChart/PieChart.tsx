import React from 'react';
import styled from 'styled-components';
import PieGraph from '@atoms/graph/PieGraph';
import myColor, { incomeColor, expenditureColor } from '@theme/color';
import PreparationBox from '@molecules/PreparationBox';

interface Props {
  data: any;
  isIncome: boolean;
}

const Container = styled.div`
  width: 90%;
  height: 20rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${myColor.primary.black};
  box-shadow: 0px 7px 15px 2px ${myColor.primary.gray};
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const pieChart: React.FC<Props> = ({ data, isIncome }: Props) => {
  const drawChart = (chartData: any, color: string[]) => (
    <PieGraph
      data={chartData}
      colors={color}
      size={250}
      backgroundColor={myColor.primary.black}
      fontColor="white"
    />
  );

  const checkIncomeValue = () => {
    if (data.income.length >= 1) {
      return drawChart(data.income, incomeColor.reverse());
    }
    return <PreparationBox color={myColor.primary.white}>내역이 없습니다.</PreparationBox>;
  };

  const checkExpenditureValue = () => {
    if (data.expenditure.length >= 1) {
      return drawChart(data.expenditure, expenditureColor);
    }
    return <PreparationBox color={myColor.primary.white}>내역이 없습니다.</PreparationBox>;
  };

  return <Container>{isIncome ? checkIncomeValue() : checkExpenditureValue()}</Container>;
};

export default pieChart;
