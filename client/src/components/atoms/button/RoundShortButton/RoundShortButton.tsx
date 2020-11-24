import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backColor?: string;
  color?: string;
  children: React.ReactChild;
  onClick?: () => void;
}

const defaultProps = {
  backColor: myColor.primary.accent,
  color: 'white',
  onClick: undefined,
};

const Button = styled.button<Props>`
  width: 10rem;
  min-width: 60px;
  max-width: 80px;
  font-size: 1rem;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.color};
  border: 0px;
  border-radius: 25px;
  cursor: pointer;
`;

const RoundShortButton: React.FC<Props> = ({ backColor, color, children, onClick }: Props) => {
  return (
    <Button onClick={onClick} backColor={backColor} color={color}>
      {children}
    </Button>
  );
};

RoundShortButton.defaultProps = defaultProps;

export default RoundShortButton;
