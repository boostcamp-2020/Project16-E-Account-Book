import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props extends ChipsProps {
  children: React.ReactChild;
}

interface ChipsProps {
  backgroundColor?: string;
  color?: string;
}

const defaultProps = {
  color: myColor.primary.accent,
  backgroundColor: myColor.primary.lightGray,
};

const Chips = styled.div<ChipsProps>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  font-size: 0.3rem;
  width: 3rem;
  height: 1.2rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 3px;
`;

const SquircleShortChips: React.FC<Props> = ({ backgroundColor, color, children }: Props) => {
  return (
    <Chips backgroundColor={backgroundColor} color={color}>
      {children}
    </Chips>
  );
};

SquircleShortChips.defaultProps = defaultProps;

export default SquircleShortChips;
