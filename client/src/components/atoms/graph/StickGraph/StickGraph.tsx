import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props extends InProps {
  outColor: string;
  width: string;
  height: string;
}

interface InProps {
  percent?: number;
  inColor?: string;
  height: string;
}

const linear = (w: any) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${w}%;
  }
`;

const StickGraph = styled.div<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.outColor};
  border-radius: 10px;
  box-shadow: inset 5px 5px 7px #6b6b6b, inset -5px -5px 7px #ffffff;
`;

const Bar = styled.div<InProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.percent}%;
  text-align: right;
  background-color: ${(props) => props.inColor};
  box-sizing: border-box;
  border-radius: 10px;
  animation: ${(props) => linear(props.percent)} 2s;
`;

const stickGraph: React.FC<Props> = ({ percent, outColor, inColor, width, height }: Props) => {
  return (
    <StickGraph height={height} outColor={outColor} width={width}>
      <Bar height={height} percent={percent} inColor={inColor} />
    </StickGraph>
  );
};

export default stickGraph;
