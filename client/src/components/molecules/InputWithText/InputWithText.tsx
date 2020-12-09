import React from 'react';
import styled from 'styled-components';
import Input from '@atoms/input/Input';
import Text from '@atoms/p/LeftLargeText';

interface Props extends sizeProps {
  title: string;
  value: any;
  onChange: any;
}

interface sizeProps {
  width?: string;
}

const defaultProps = {
  width: '100%',
};

const InputWithText = styled.div<sizeProps>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

const inputWithText: React.FC<Props> = ({ width, title, value, onChange }: Props) => {
  return (
    <InputWithText width={width}>
      <Text>{title}</Text>
      <Input
        width="85%"
        fontSize="1.4rem"
        textAlign="right"
        placeholder="0"
        value={value}
        onChange={onChange}
      />
      <Text>원</Text>
    </InputWithText>
  );
};

InputWithText.defaultProps = defaultProps;

export default inputWithText;
