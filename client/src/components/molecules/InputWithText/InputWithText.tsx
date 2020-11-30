import React from 'react';
import styled from 'styled-components';
import Input from '@atoms/input/Input';
import CenterSmallText from '@atoms/p/CenterSmallText';

interface Props extends sizeProps {
  title: string;
}

interface sizeProps {
  width?: string;
}

const defaultProps = {
  width: '15%',
};

const InputWithText = styled.div<sizeProps>`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width};
`;

const inputWithText: React.FC<Props> = ({ width, title }: Props) => {
  return (
    <InputWithText width={width}>
      <CenterSmallText>{title}</CenterSmallText>
      <Input placeholder="0" />
      <CenterSmallText>원</CenterSmallText>
    </InputWithText>
  );
};

InputWithText.defaultProps = defaultProps;

export default inputWithText;
