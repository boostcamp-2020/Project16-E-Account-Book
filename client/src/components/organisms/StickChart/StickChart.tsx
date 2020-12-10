import React from 'react';
import styled from 'styled-components';
import StickWithText from '@molecules/StickWithText';
import myColor from '@theme/color';

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
  const incomeStick = data.income.map((ele, index) => {
    const { name } = ele;
    const money = Number(ele.money);
    const percent = Number(ele.percent);
    const inColor: any = incomeColor[index];
    const outColor = 'white';
    const height = '40px';
    const width = '80%';
    return (
      <StickWithText
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

  const expenditureStick = data.expenditure.map((ele, index) => {
    const { name } = ele;
    const money = Number(ele.money);
    const percent = Number(ele.percent);
    const inColor: any = expenditureColor[index];
    const outColor = 'white';
    const height = '40px';
    const width = '80%';
    return (
      <StickWithText
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

  return <StickChart>{true ? incomeStick : expenditureStick}</StickChart>;
};

export default stickChart;
