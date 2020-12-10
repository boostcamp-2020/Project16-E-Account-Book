import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
  color?: string;
  children: React.ReactChild;
  onClick?: () => void;
}

const defaultProps = {
  backgroundColor: myColor.primary.lightGray,
  color: myColor.primary.accent,
  onClick: undefined,
};

const Button = styled.button<Props>`
  width: 10rem;
  min-width: 60px;
  max-width: 80px;
  height: 32px;
  font-weight: bold;
  font-size: 0.8rem;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.4rem 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const SquircleShortButton: React.FC<Props> = ({
  backgroundColor,
  color,
  children,
  onClick,
}: Props) => {
  return (
    <Button onClick={onClick} backgroundColor={backgroundColor} color={color}>
      {children}
    </Button>
  );
};

SquircleShortButton.defaultProps = defaultProps;

export default SquircleShortButton;
