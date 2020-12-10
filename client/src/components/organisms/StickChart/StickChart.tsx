import React from 'react';
import styled from 'styled-components';
import StickWithText from '@molecules/StickWithText';

interface Props {
  data: any;
}

const StickChart = styled.div`
  display: flex;
  flex-direction: column;
`;

const stickChart: React.FC<Props> = ({ data }: Props) => {
  const stick = data.income.map((ele) => {
    const { name } = ele;
    const money = Number(ele.money);
    const percent = Number(ele.percent);
    const inColor = 'pink';
    const outColor = 'white';
    const height = '40px';
    const width = '100%';
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

  return <StickChart>{stick}</StickChart>;
};

export default stickChart;
