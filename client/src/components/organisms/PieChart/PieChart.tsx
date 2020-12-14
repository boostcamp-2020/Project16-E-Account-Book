import React from 'react';
import styled from 'styled-components';
import PieGraph from '@atoms/graph/PieGraph';
import myColor from '@theme/color';

interface Props {
  data: any;
  isIncome: boolean;
}

const Container = styled.div`
  width: 550px;
  height: 550px;
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

const pieChart: React.FC<Props> = ({ data, isIncome }: Props) => {
  const incomeColor = [
    myColor.statistic.incomeOne,
    myColor.statistic.incomeTwo,
    myColor.statistic.incomeThree,
    myColor.statistic.incomeFour,
  ];
  const expenditureColor = [
    myColor.statistic.expenditureOne,
    myColor.statistic.expenditureTwo,
    myColor.statistic.expenditureThree,
    myColor.statistic.expenditureFour,
  ];

  const incomePieChart = () => <PieGraph data={data.income} colors={incomeColor} size={500} />;
  const expenditurePieChart = () => (
    <PieGraph data={data.expenditure} colors={expenditureColor} size={500} />
  );

  return <Container>{isIncome ? incomePieChart() : expenditurePieChart()}</Container>;
};

export default pieChart;
