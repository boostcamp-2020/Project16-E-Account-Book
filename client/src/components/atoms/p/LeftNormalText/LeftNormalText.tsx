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
  wordBreak?: string;
}

const defaultProps = {
  color: myColor.primary.black,
  fontSize: '16px',
  fontWeight: 'normal',
  wordBreak: 'keep-all',
};

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize};
  background-color: transparent;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  text-align: left;
  word-break: ${(props) => props.wordBreak};
`;

const LeftNormalText: React.FC<Props> = ({
  color,
  fontSize,
  fontWeight,
  wordBreak,
  children,
}: Props) => {
  return (
    <Text color={color} fontSize={fontSize} fontWeight={fontWeight} wordBreak={wordBreak}>
      {children}
    </Text>
  );
};

LeftNormalText.defaultProps = defaultProps;

export default LeftNormalText;
