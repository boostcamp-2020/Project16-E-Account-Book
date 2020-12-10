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
  border: 0.2px solid #e5e5e5;
  margin: 0 0 20px;
`;

const Div1 = styled.div`
  flex: 1;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
const Div3 = styled.div`
  flex: 4;
`;
const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
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
        <CenterLargeText color="#c18160" fontSize="11px">
          {name}
        </CenterLargeText>
      </Div1>
      <Div2>
        <CenterLargeText color="#c18160" fontSize="11px">
          {percent}
        </CenterLargeText>
        <CenterLargeText color="#c18160" fontSize="11px">
          %
        </CenterLargeText>
      </Div2>
      <Div3>
        <StickGraph
          inColor={inColor}
          outColor={outColor}
          width={width}
          height={height}
          percent={percent}
        />
      </Div3>
      <Div4>
        <NumberText color="#c18160" fontWeight="bold" fontSize="11px" money={money} />
        <CenterLargeText color="#c18160" fontSize="11px">
          원
        </CenterLargeText>
      </Div4>
    </StickWithText>
  );
};

export default stickWithText;
