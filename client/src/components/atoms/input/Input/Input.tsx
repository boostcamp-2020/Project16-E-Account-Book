import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const defaultProps = {
  color: myColor.primary.black,
  width: '8rem',
  height: '1rem',
  fontSize: '0.8rem',
};

const Input = styled.input<Props>`
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  color: ${(props) => props.color};
  border: 0.15rem solid;
  border-top: none;
  border-left: none;
  border-right: none;
  text-align: right;
  cursor: pointer;
  :hover {
    border-color: ${myColor.primary.accent};
    transition: all ease 0.3s;
  }
  :focus {
    border-color: ${myColor.primary.accent};
    outline: none;
  }
`;

const RoundShortChips: React.FC<Props> = ({ width, height, fontSize, color }: Props) => {
  return <Input width={width} height={height} fontSize={fontSize} color={color} />;
};

RoundShortChips.defaultProps = defaultProps;

export default RoundShortChips;
