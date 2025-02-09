import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
  color?: string;
  isSubmit?: boolean;
  children: React.ReactChild;
  onClick?: () => void;
}

const defaultProps = {
  backgroundColor: myColor.primary.accent,
  isSubmit: false,
  color: myColor.primary.white,
  onClick: undefined,
};

const Button = styled.button<Props>`
  width: 90%;
  font-size: 1rem;
  border: 0px;
  border-radius: 25px;
  cursor: pointer;
  padding: 0.25rem 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const RoundLongButton: React.FC<Props> = ({
  backgroundColor,
  color,
  isSubmit,
  children,
  onClick,
}: Props) => {
  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </Button>
  );
};

RoundLongButton.defaultProps = defaultProps;

export default RoundLongButton;
