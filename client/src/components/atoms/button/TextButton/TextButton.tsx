import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  color?: string;
  padding?: string;
  children: React.ReactChild | React.ReactChild[];
  onClick?: () => void;
}

const defaultProps = {
  color: myColor.primary.accent,
  onClick: undefined,
  padding: '0.25rem 0',
};

const Button = styled.button<Props>`
  font-size: 1rem;
  font-weight: bold;
  border: 0px;
  border-radius: 25px;
  cursor: pointer;
  padding: ${(props) => props.padding};
  background-color: transparent;
  color: ${(props) => props.color};
`;

const TextButton: React.FC<Props> = ({ color, padding, children, onClick }: Props) => {
  return (
    <Button type="button" onClick={onClick} color={color} padding={padding}>
      {children}
    </Button>
  );
};

TextButton.defaultProps = defaultProps;

export default TextButton;
