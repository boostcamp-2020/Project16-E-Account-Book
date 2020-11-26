import React from 'react';
import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
}

const TextArea = styled.textarea<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const textArea: React.FC<Props> = ({ width, height }: Props) => {
  return <TextArea width={width} height={height} />;
};

export default textArea;
