import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  color?: string;
  padding?: string;
  children: React.ReactChild | React.ReactChild[];
  onClick?: () => void;
  width?: string;
  height?: string;
}

const defaultProps = {
  color: myColor.primary.accent,
  onClick: undefined,
  padding: '0.25rem 0',
  width: '',
  height: '',
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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const TextButton: React.FC<Props> = ({
  color,
  padding,
  children,
  width,
  height,
  onClick,
}: Props) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      color={color}
      padding={padding}
      width={width}
      height={height}
    >
      {children}
    </Button>
  );
};

TextButton.defaultProps = defaultProps;

export default TextButton;
