import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  width: string;
  height: string;
}

const TextArea = styled.textarea<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  resize: none;
  border: none;
  background-color: ${myColor.background.lightGray};
  border-radius: 15px;
`;

const textArea: React.FC<Props> = ({ width, height }: Props) => {
  return <TextArea width={width} height={height} />;
};

export default textArea;
