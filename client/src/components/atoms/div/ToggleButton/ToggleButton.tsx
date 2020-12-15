import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@atoms/button/RoundShortButton';
import myColor from '@theme/color';

interface Props extends sizeProps {
  setIsIncome: React.Dispatch<React.SetStateAction<boolean>>;
  leftButtonName: string;
  rightButtonName: string;
  isIncome: boolean;
}

interface sizeProps {
  width?: string;
  height?: string;
}

const defaultProps = {
  width: '170px',
  height: '50px',
};

const ToggleButtonContainer = styled.div<sizeProps>`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: transparent;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ToggleButton: React.FC<Props> = ({
  leftButtonName,
  rightButtonName,
  isIncome,
  setIsIncome,
  ...args
}: Props) => {
  const [leftColor, setLeftColor] = useState(myColor.primary.white);
  const [rightColor, setRightColor] = useState(myColor.primary.accent);
  const changeColor = (income) => {
    if (income === false) {
      setLeftColor(myColor.primary.white);
      setRightColor(myColor.primary.accent);
    } else {
      setLeftColor(myColor.primary.accent);
      setRightColor(myColor.primary.white);
    }
  };

  useEffect(() => {
    changeColor(isIncome);
  }, []);

  return (
    <ToggleButtonContainer {...args}>
      <Button
        backgroundColor={leftColor}
        color={rightColor}
        onClick={() => {
          setIsIncome(true);
          changeColor(true);
        }}
      >
        {leftButtonName}
      </Button>
      <Button
        backgroundColor={rightColor}
        color={leftColor}
        onClick={() => {
          setIsIncome(false);
          changeColor(false);
        }}
      >
        {rightButtonName}
      </Button>
    </ToggleButtonContainer>
  );
};

ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
