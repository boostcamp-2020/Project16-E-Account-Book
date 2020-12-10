import React from 'react';
import styled from 'styled-components';
import StickWithText from '@molecules/StickWithText';
import myColor from '@theme/color';
import getRandomKey from '@utils/random';

interface Props {
  data: any;
}

const StickChart = styled.div`
  display: flex;
  flex-direction: column;
`;

const stickChart: React.FC<Props> = ({ data }: Props) => {
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
  const maxFourIncome = data.income.slice(0, 4);
  const maxFourExpenditure = data.expenditure.slice(0, 4);
  const incomeStick = () =>
    maxFourIncome.map((ele, index) => {
      const { name } = ele;
      const money = Number(ele.money);
      const percent = Number(ele.percent);
      const inColor: any = incomeColor[index];
      const outColor = 'white';
      const height = '40px';
      const width = '80%';
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
    maxFourExpenditure.map((ele, index) => {
      const { name } = ele;
      const money = Number(ele.money);
      const percent = Number(ele.percent);
      const inColor: any = expenditureColor[index];
      const outColor = 'white';
      const height = '40px';
      const width = '80%';
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

  return <StickChart>{true ? incomeStick() : expenditureStick()}</StickChart>;
};

export default stickChart;
