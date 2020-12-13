import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '@atoms/button/RoundShortButton';
import myColor from '@theme/color';

interface Props extends sizeProps {
  leftCallback: React.Dispatch<React.SetStateAction<boolean>>;
  rightCallback: React.Dispatch<React.SetStateAction<boolean>>;
  leftButtonName: string;
  rightButtonName: string;
  initRight?: boolean;
}

interface sizeProps {
  width?: string;
  height?: string;
}

const defaultProps = {
  width: '170px',
  height: '50px',
  initRight: false,
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

let leftColor = myColor.primary.accent;
let rightColor = 'white';

const ToggleButton: React.FC<Props> = ({
  initRight,
  leftCallback,
  rightCallback,
  leftButtonName,
  rightButtonName,
  ...args
}: Props) => {
  const changeColor = (isLeft) => {
    if (isLeft === false) {
      leftColor = 'white';
      rightColor = myColor.primary.accent;
    } else {
      leftColor = myColor.primary.accent;
      rightColor = 'white';
    }
  };

  useEffect(() => {
    if (initRight) {
      changeColor(false);
    }
  }, []);

  return (
    <ToggleButtonContainer {...args}>
      <Button
        backgroundColor={leftColor}
        color={rightColor}
        onClick={() => {
          leftCallback(true);
          rightCallback(false);
          changeColor(true);
        }}
      >
        {leftButtonName}
      </Button>
      <Button
        backgroundColor={rightColor}
        color={leftColor}
        onClick={() => {
          leftCallback(false);
          rightCallback(true);
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
