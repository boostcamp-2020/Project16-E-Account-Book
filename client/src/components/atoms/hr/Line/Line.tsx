import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  lineColor?: string;
  widthPercent?: string;
  margin?: string;
  height?: string;
}

const defaultProps = {
  lineColor: myColor.primary.lightGray,
  widthPercent: '80',
  margin: '0 0 0 0 ',
  height: '0',
};

const Line = styled.hr<Props>`
  width: ${(props) => props.widthPercent}%;
  background-color: ${(props) => props.lineColor};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
`;

const line: React.FC<Props> = ({ widthPercent, lineColor, margin, height }: Props) => {
  return <Line widthPercent={widthPercent} lineColor={lineColor} margin={margin} height={height} />;
};

line.defaultProps = defaultProps;

export default line;
