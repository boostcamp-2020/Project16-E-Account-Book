import React from 'react';
import styled from 'styled-components';
import StickGraph from '@atoms/graph/StickGraph';
import NumberText from '@atoms/p/NumberText';
import CenterLargeText from '@atoms/p/CenterLargeText';

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
  align-items: center;
  width: 100%;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
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
      &nbsp;
      <CenterLargeText fontSize="11px">{name}</CenterLargeText>
      &nbsp;&nbsp;&nbsp;
      <CenterLargeText fontSize="11px">{percent}</CenterLargeText>
      <CenterLargeText fontSize="11px">%</CenterLargeText>
      &nbsp;
      <StickGraph
        inColor={inColor}
        outColor={outColor}
        width={width}
        height={height}
        percent={percent}
      />
      &nbsp;&nbsp;&nbsp;
      <NumberText fontWeight="bold" fontSize="11px" color="black" money={money} />
      &nbsp;
      <CenterLargeText fontSize="11px">원</CenterLargeText>
    </StickWithText>
  );
};

export default stickWithText;
