import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  color?: string;
  children: React.ReactChild | React.ReactChild[];
  onClick?: () => void;
}

const defaultProps = {
  color: myColor.primary.accent,
  onClick: undefined,
};

const Button = styled.button<Props>`
  font-size: 1rem;
  font-weight: bold;
  border: 0px;
  border-radius: 25px;
  cursor: pointer;
  padding: 0.25rem 0;
  background-color: transparent;
  color: ${(props) => props.color};
`;

const TextButton: React.FC<Props> = ({ color, children, onClick }: Props) => {
  return (
    <Button onClick={onClick} color={color}>
      {children}
    </Button>
  );
};

TextButton.defaultProps = defaultProps;

export default TextButton;
