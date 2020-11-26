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
  color: myColor.primary.accent,
  backgroundColor: myColor.primary.lightGray,
  width: '3rem',
  height: '1.2rem',
  fontSize: '0.3rem',
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
  border-radius: 3px;
`;

const SquircleShortChips: React.FC<Props> = ({
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

SquircleShortChips.defaultProps = defaultProps;

export default SquircleShortChips;
