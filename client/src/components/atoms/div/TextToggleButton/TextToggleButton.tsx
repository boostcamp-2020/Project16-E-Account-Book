import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@atoms/button/TextButton';
import myColor from '@theme/color';

interface Props extends sizeProps {
  leftButtonName: string;
  rightButtonName: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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

const TextToggleButton: React.FC<Props> = ({ leftButtonName, rightButtonName, ...args }: Props) => {
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    if (isCheck === false) {
      leftColor = myColor.primary.darkGray;
      rightColor = myColor.primary.accent;
    } else {
      leftColor = myColor.primary.accent;
      rightColor = myColor.primary.darkGray;
    }
  }, [isCheck]);

  const changeLeft = () => {
    if (isCheck === true) {
      setIsCheck(!isCheck);
    }
  };

  const changeRight = () => {
    if (isCheck === false) {
      setIsCheck(!isCheck);
    }
  };
  return (
    <TextToggleButtonContainer {...args}>
      <Button
        color={leftColor}
        onClick={() => {
          changeLeft();
        }}
      >
        {leftButtonName}
      </Button>
      <Button
        color={rightColor}
        onClick={() => {
          changeRight();
        }}
      >
        {rightButtonName}
      </Button>
    </TextToggleButtonContainer>
  );
};

TextToggleButton.defaultProps = defaultProps;

export default TextToggleButton;
