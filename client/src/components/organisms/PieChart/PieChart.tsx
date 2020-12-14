import React from 'react';
import styled from 'styled-components';
import PieGraph from '@atoms/graph/PieGraph';
import myColor, { incomeColor, expenditureColor } from '@theme/color';

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
  const drawChart = (chartData: any, color: string[]) => (
    <PieGraph
      data={chartData}
      colors={color}
      size={500}
      backgroundColor={myColor.primary.black}
      fontColor="white"
    />
  );

  return (
    <Container>
      {isIncome
        ? drawChart(data.income, incomeColor)
        : drawChart(data.expenditure, expenditureColor)}
    </Container>
  );
};

export default pieChart;
