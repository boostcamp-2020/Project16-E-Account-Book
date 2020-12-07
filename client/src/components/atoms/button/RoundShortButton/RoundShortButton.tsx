import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
  color?: string;
  children: React.ReactChild;
  border?: string;
  onClick?: () => void;
}

const defaultProps = {
  backgroundColor: myColor.primary.accent,
  color: 'white',
  border: 'solid 1px',
  onClick: undefined,
};

const Button = styled.button<Props>`
  width: 10rem;
  min-width: 60px;
  max-width: 80px;
  font-size: 1rem;
  border: ${(props) => props.border};
  border-color: ${(props) => props.color};
  border-radius: 25px;
  cursor: pointer;
  padding: 0.25rem 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const RoundShortButton: React.FC<Props> = ({
  backgroundColor,
  color,
  children,
  border,
  onClick,
}: Props) => {
  return (
    <Button onClick={onClick} backgroundColor={backgroundColor} color={color} border={border}>
      {children}
    </Button>
  );
};

RoundShortButton.defaultProps = defaultProps;

export default RoundShortButton;
