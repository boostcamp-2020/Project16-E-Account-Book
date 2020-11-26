import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  lineColor?: string;
  widthPercent?: number;
}

const defaultProps = {
  lineColor: myColor.primary.lightGray,
  widthPercent: 80,
};

const Line = styled.hr<Props>`
  width: ${(props) => props.widthPercent}%;
  color: ${(props) => props.lineColor};
`;

const line: React.FC<Props> = ({ widthPercent, lineColor }: Props) => {
  return <Line widthPercent={widthPercent} lineColor={lineColor} />;
};

line.defaultProps = defaultProps;

export default line;
