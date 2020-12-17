import React from 'react';
import styled from 'styled-components';

interface Props extends SizeProps {
  backgroundColor: string;
  children?: React.ReactChild;
  buttonEvent?: (data) => void;
}

interface SizeProps {
  size?: string;
}

const defaultProps = {
  size: '2rem',
  buttonEvent: undefined,
  children: undefined,
};

const Div = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  padding-top: 0.15rem;
  display: flex;
  justify-content: center;
`;

const ColorLabel: React.FC<Props> = ({ buttonEvent, size, backgroundColor, children }: Props) => {
  return (
    <Div
      size={size}
      backgroundColor={backgroundColor}
      onClick={() => {
        if (buttonEvent) {
          buttonEvent(backgroundColor);
        }
      }}
    >
      {children}
    </Div>
  );
};

ColorLabel.defaultProps = defaultProps;

export default ColorLabel;
