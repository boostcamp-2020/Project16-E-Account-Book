import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props extends ChipsProps {
  children: React.ReactChild;
}

interface ChipsProps {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.accent,
  color: myColor.primary.white,
  width: '4rem',
  height: '1.5rem',
  fontSize: '0.8rem',
};

const Chips = styled.div<ChipsProps>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 10px;
`;

const RoundShortChips: React.FC<Props> = ({
  backgroundColor,
  width,
  height,
  fontSize,
  color,
  children,
}: Props) => {
  return (
    <Chips
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
    >
      {children}
    </Chips>
  );
};

RoundShortChips.defaultProps = defaultProps;

export default RoundShortChips;
