import React from 'react';
import styled from 'styled-components';
import StickGraph from '@atoms/graph/StickGraph';

interface Props {
  name: string;
  money: number;
  percent: number;
  height: string;
  width: string;
  inColor: string;
  outColor: string;
}

const StickWithText = styled.div`
  display: flex;
`;

const stickWithText: React.FC<Props> = ({
  name,
  money,
  percent,
  height,
  width,
  inColor,
  outColor,
}: Props) => {
  return (
    <StickWithText>
      <StickGraph
        inColor={inColor}
        outColor={outColor}
        width={width}
        height={height}
        percent={percent}
      />
    </StickWithText>
  );
};

export default stickWithText;
