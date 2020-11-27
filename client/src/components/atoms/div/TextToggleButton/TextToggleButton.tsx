import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@atoms/button/TextButton';
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
  width: '100px',
  height: '60px',
};

const TextToggleButtonContainer = styled.div<sizeProps>`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: transparent;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

let leftColor = myColor.primary.accent;
let rightColor = myColor.primary.darkGray;

const TextToggleButton: React.FC<Props> = ({
  leftButtonName,
  rightButtonName,
  onClickLeft,
  onClickRight,
  ...args
}: Props) => {
  const [isleftSelected, setIsleftSelected] = useState(true);

  useEffect(() => {
    if (isleftSelected === false) {
      leftColor = myColor.primary.darkGray;
      rightColor = myColor.primary.accent;
    } else {
      leftColor = myColor.primary.accent;
      rightColor = myColor.primary.darkGray;
    }
  }, [isleftSelected]);

  const changeColor = () => {
    setIsleftSelected(!isleftSelected);
  };

  return (
    <TextToggleButtonContainer {...args}>
      <Button
        color={leftColor}
        onClick={() => {
          changeColor();
          onClickLeft();
        }}
      >
        {leftButtonName}
      </Button>
      <Button
        color={rightColor}
        onClick={() => {
          changeColor();
          onClickRight();
        }}
      >
        {rightButtonName}
      </Button>
    </TextToggleButtonContainer>
  );
};

TextToggleButton.defaultProps = defaultProps;

export default TextToggleButton;
