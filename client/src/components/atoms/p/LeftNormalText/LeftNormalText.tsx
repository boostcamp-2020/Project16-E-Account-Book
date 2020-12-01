import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props extends TextProps {
  children: React.ReactChild | React.ReactChild[];
}

interface TextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const defaultProps = {
  color: myColor.primary.black,
  fontSize: '16px',
  fontWeight: 'normal',
};

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize};
  background-color: transparent;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  text-align: left;
`;

const LeftNormalText: React.FC<Props> = ({ color, fontSize, fontWeight, children }: Props) => {
  return (
    <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  );
};

LeftNormalText.defaultProps = defaultProps;

export default LeftNormalText;
