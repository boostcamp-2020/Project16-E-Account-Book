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
  backgroundColor: myColor.primary.accent,
  color: myColor.primary.white,
};

const Chips = styled.div<ChipsProps>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  width: 4rem;
  height: 1.5rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 10px;
`;

const RoundShortChips: React.FC<Props> = ({ backgroundColor, color, children }: Props) => {
  return (
    <Chips backgroundColor={backgroundColor} color={color}>
      {children}
    </Chips>
  );
};

RoundShortChips.defaultProps = defaultProps;

export default RoundShortChips;
