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
  width: 90%;
  font-size: 1rem;
  border: 0px;
  border-radius: 25px;
  cursor: pointer;
  padding: 0.25rem 0;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.color};
`;

const RoundLongButton: React.FC<Props> = ({ backColor, color, children, onClick }: Props) => {
  return (
    <Button onClick={onClick} backColor={backColor} color={color}>
      {children}
    </Button>
  );
};

RoundLongButton.defaultProps = defaultProps;

export default RoundLongButton;
