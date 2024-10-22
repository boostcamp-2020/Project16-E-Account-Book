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
  backgroundColor: myColor.primary.accent,
  color: myColor.primary.white,
  onClick: undefined,
};

const Button = styled.button<Props>`
  width: 45%;
  font-size: 1rem;
  border: 0px;
  border-radius: 25px;
  cursor: pointer;
  padding: 0.25rem 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const RoundButton: React.FC<Props> = ({ backgroundColor, color, children, onClick }: Props) => {
  return (
    <Button onClick={onClick} backgroundColor={backgroundColor} color={color}>
      {children}
    </Button>
  );
};

RoundButton.defaultProps = defaultProps;

export default RoundButton;
