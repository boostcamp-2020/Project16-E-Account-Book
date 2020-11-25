import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props extends TextProps {
  children: React.ReactChild;
}

interface TextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const defaultProps = {
  color: myColor.primary.kakaoBlack,
  fontSize: '24px',
  fontWeight: 'normal',
};

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize};
  background-color: transparent;
  color: ${(props) => props.color};
  fontweight: ${(props) => props.fontWeight};
  text-align: center;
`;

const CenterLargeText: React.FC<Props> = ({ color, fontSize, fontWeight, children }: Props) => {
  return (
    <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  );
};

CenterLargeText.defaultProps = defaultProps;

export default CenterLargeText;
