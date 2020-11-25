import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  height?: string;
  backgroundColor?: string;
  children?: React.ReactChild;
}

const defaultProps = {
  height: '200px',
  backgroundColor: myColor.primary.main,
  children: undefined,
};

const Div = styled.div<Props>`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 12px 12px -8px #b8b8b8;
  border-radius: 0px 0px 12px 12px;
`;

const RoundButton: React.FC<Props> = ({ height, backgroundColor, children }: Props) => {
  return (
    <Div height={height} backgroundColor={backgroundColor}>
      {children}
    </Div>
  );
};

RoundButton.defaultProps = defaultProps;

export default RoundButton;
