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
  width: '10%',
};

const DateWithText = styled.div<sizeProps>`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width};
`;

const dateWithText: React.FC<Props> = ({ width, title }: Props) => {
  return (
    <DateWithText width={width}>
      <CenterSmallText>{title}</CenterSmallText>
      <Input placeholder="08:23" />
    </DateWithText>
  );
};

DateWithText.defaultProps = defaultProps;

export default dateWithText;
