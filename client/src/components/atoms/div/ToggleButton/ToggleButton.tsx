import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@atoms/button/RoundShortButton';
import myColor from '@theme/color';

interface Props extends sizeProps {
  leftButtonName: string;
  rightButtonName: string;
  onClickLeft: () => void;
  onClickRight: () => void;
}

interface sizeProps {
  width?: string;
  height?: string;
}

const defaultProps = {
  width: '200px',
  height: '50px',
};

const ToggleButtonContainer = styled.div<sizeProps>`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: transparent;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

let leftColor = myColor.primary.accent;
let rightColor = 'white';

const ToggleButton: React.FC<Props> = ({
  leftButtonName,
  rightButtonName,
  onClickLeft,
  onClickRight,
  ...args
}: Props) => {
  const [isleftSelected, setIsleftSelected] = useState(true);

  useEffect(() => {
    if (isleftSelected === false) {
      leftColor = 'white';
      rightColor = myColor.primary.accent;
    } else {
      leftColor = myColor.primary.accent;
      rightColor = 'white';
    }
  }, [isleftSelected]);

  const changeColor = () => {
    setIsleftSelected(!isleftSelected);
  };

  return (
    <ToggleButtonContainer {...args}>
      <Button
        backgroundColor={leftColor}
        color={rightColor}
        onClick={() => {
          changeColor();
          onClickLeft();
        }}
      >
        {leftButtonName}
      </Button>
      <Button
        backgroundColor={rightColor}
        color={leftColor}
        onClick={() => {
          changeColor();
          onClickRight();
        }}
      >
        {rightButtonName}
      </Button>
    </ToggleButtonContainer>
  );
};

ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
