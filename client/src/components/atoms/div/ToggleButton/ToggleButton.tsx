import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@atoms/button/RoundShortButton';
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

const ToggleButton: React.FC<Props> = ({ leftButtonName, rightButtonName, ...args }: Props) => {
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    if (isCheck === false) {
      leftColor = 'white';
      rightColor = myColor.primary.accent;
    } else {
      leftColor = myColor.primary.accent;
      rightColor = 'white';
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
    <ToggleButtonContainer {...args}>
      <Button
        backgroundColor={leftColor}
        color={rightColor}
        onClick={() => {
          changeLeft();
        }}
      >
        {leftButtonName}
      </Button>
      <Button
        backgroundColor={rightColor}
        color={leftColor}
        onClick={() => {
          changeRight();
        }}
      >
        {rightButtonName}
      </Button>
    </ToggleButtonContainer>
  );
};

ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
