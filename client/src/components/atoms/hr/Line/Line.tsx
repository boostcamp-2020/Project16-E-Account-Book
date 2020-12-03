import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  lineColor?: string;
  widthPercent?: string;
  margin?: string;
}

const defaultProps = {
  lineColor: myColor.primary.lightGray,
  widthPercent: '80',
  margin: '0 0 0 0 ',
};

const Line = styled.hr<Props>`
  width: ${(props) => props.widthPercent}%;
  color: ${(props) => props.lineColor};
  margin: ${(props) => props.margin};
`;

const line: React.FC<Props> = ({ widthPercent, lineColor, margin }: Props) => {
  return <Line widthPercent={widthPercent} lineColor={lineColor} margin={margin} />;
};

line.defaultProps = defaultProps;

export default line;
