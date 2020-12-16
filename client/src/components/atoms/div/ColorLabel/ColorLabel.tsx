import React, { useState } from 'react';
import styled from 'styled-components';
import CheckSVG from '@svg/check.svg';
import colorUtils from '@utils/color';

interface Props extends SizeProps {
  backgroundColor: string;
  buttonEvent?: (data) => void;
}

interface SizeProps {
  size?: string;
}

const defaultProps = {
  size: '1.5rem',
  buttonEvent: undefined,
};

const Div = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  padding-top: 0.1rem;
`;

const ColorLabel: React.FC<Props> = ({ buttonEvent, size, backgroundColor }: Props) => {
  const [checkDisplay, setCheckDisplay] = useState('none');

  const changeCheckDisplay = () => {
    if (checkDisplay === 'none') {
      setCheckDisplay('');
    } else {
      setCheckDisplay('none');
    }
  };

  return (
    <Div
      size={size}
      backgroundColor={backgroundColor}
      onClick={() => {
        if (buttonEvent) {
          buttonEvent(backgroundColor);
          changeCheckDisplay();
        }
      }}
    >
      <CheckSVG
        width="70%"
        height="70%"
        display={checkDisplay}
        fill={colorUtils.getFontColor(backgroundColor)}
      />
    </Div>
  );
};

ColorLabel.defaultProps = defaultProps;

export default ColorLabel;
