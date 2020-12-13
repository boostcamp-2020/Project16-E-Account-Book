import React from 'react';
import styled from 'styled-components';
import StickGraph from '@atoms/graph/StickGraph';
import NumberText from '@atoms/p/NumberText';
import CenterLargeText from '@atoms/p/CenterLargeText';
import myColor from '@theme/color';

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
  color: white;
  align-items: center;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #2f2e2d;
  box-shadow: 5px 5px 10px #1f1e1d, -5px -5px 10px #3f3e3d;
  margin: 8px 0px;
`;

const Div1 = styled.div`
  width: 10%;
`;
const Div2 = styled.div`
  width: 3%;
`;
const Div3 = styled.div`
  width: 3%;
`;
const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;
const Div5 = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
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
      <Div1>
        <CenterLargeText color={myColor.primary.white} fontSize="9px">
          {name}
        </CenterLargeText>
      </Div1>
      <Div2>
        <CenterLargeText color={myColor.primary.white} fontSize="9px">
          {percent}
        </CenterLargeText>
      </Div2>
      <Div3>
        <CenterLargeText color={myColor.primary.white} fontSize="9px">
          %
        </CenterLargeText>
      </Div3>
      <Div4>
        <StickGraph
          inColor={inColor}
          outColor={outColor}
          width={width}
          height={height}
          percent={percent}
        />
      </Div4>
      <Div5>
        <NumberText color={myColor.primary.white} fontWeight="bold" fontSize="9px" money={money} />
        <CenterLargeText color={myColor.primary.white} fontSize="9px">
          원
        </CenterLargeText>
      </Div5>
    </StickWithText>
  );
};

export default stickWithText;
