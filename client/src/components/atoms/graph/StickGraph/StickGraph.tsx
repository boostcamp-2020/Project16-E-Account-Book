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
  border: 0.2px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #e5e5e5;
`;

const Bar = styled.div<InProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.percent}%;
  text-align: right;
  background-color: ${(props) => props.inColor};
  border-radius: 10px;
  box-sizing: border-box;
  animation: ${(props) => linear(props.percent)} 5s;
`;

const stickGraph: React.FC<Props> = ({ percent, outColor, inColor, width, height }: Props) => {
  return (
    <StickGraph height={height} outColor={outColor} width={width}>
      <Bar height={height} percent={percent} inColor={inColor} />
    </StickGraph>
  );
};

export default stickGraph;
