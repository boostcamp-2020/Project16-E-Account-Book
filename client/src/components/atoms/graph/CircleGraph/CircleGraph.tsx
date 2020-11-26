import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import myColor from '@theme/color';

interface Props extends containerProps {
  income: number;
  expend: number;
}
interface containerProps {
  size: number;
}

const GraphContainer = styled.div<containerProps>`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  background-color: transparent;
`;

const CircleGraph: React.FC<Props> = ({ income, expend, size }: Props) => {
  const data = {
    datasets: [
      {
        borderWidth: 0,
        data: [income, expend],
        backgroundColor: [myColor.primary.reject, myColor.primary.accent],
      },
    ],
    labels: ['수입', '지출'],
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      position: 'top',
      display: true,
      labels: { boxWidth: size * 2, fontSize: size * 1.2 },
    },
  };

  return (
    <GraphContainer size={size}>
      <Doughnut data={data} options={options} />
    </GraphContainer>
  );
};

export default CircleGraph;
