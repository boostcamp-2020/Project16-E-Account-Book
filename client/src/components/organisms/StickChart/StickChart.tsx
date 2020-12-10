import React from 'react';
import styled from 'styled-components';
import StickWithText from '@molecules/StickWithText';

interface Props {
  name: string;
  money: number;
  percent: number;
  height: string;
  width: string;
  inColor: string;
  outColor: string;
}

const StickChart = styled.div`
  display: flex;
`;

const stickChart: React.FC<Props> = ({
  name,
  money,
  percent,
  height,
  width,
  inColor,
  outColor,
}: Props) => {
  return (
    <StickChart>
      <StickWithText />
    </StickChart>
  );
};

export default stickChart;
