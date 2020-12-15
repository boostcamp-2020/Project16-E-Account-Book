import React, { useState } from 'react';
import styled from 'styled-components';
import CheckSVG from '@svg/check.svg';
import colorUtils from '@utils/color';

interface Props extends SizeProps {
  backgroundColor: string;
  onClick?: (data) => void;
}

interface SizeProps {
  size?: string;
}

const defaultProps = {
  size: '1.5rem',
  onClick: undefined,
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

const ColorLabel: React.FC<Props> = ({ onClick, size, backgroundColor }: Props) => {
  const [checked, setChecked] = useState('none');

  const changeChecked = () => {
    if (checked === 'none') {
      setChecked('');
    } else {
      setChecked('none');
    }
  };

  return (
    <Div
      size={size}
      backgroundColor={backgroundColor}
      onClick={() => {
        if (onClick) {
          onClick(backgroundColor);
          changeChecked();
        }
      }}
    >
      <CheckSVG
        width="70%"
        height="70%"
        display={checked}
        fill={colorUtils.getFontColor(backgroundColor)}
      />
    </Div>
  );
};

ColorLabel.defaultProps = defaultProps;

export default ColorLabel;
