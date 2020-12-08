import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  width: string;
  height: string;
  value?: string;
  fontColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  onChange?: (event: any) => void;
}

const defaultProps = {
  value: '',
  backgroundColor: myColor.background.lightGray,
  fontSize: '10pt',
  fontColor: 'black',
  onChange: undefined,
};

const TextArea = styled.textarea<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  resize: none;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-family: S-CoreDream-4Regular;
`;

const textArea: React.FC<Props> = ({
  fontSize,
  fontColor,
  backgroundColor,
  value,
  width,
  height,
  onChange,
}: Props) => {
  return (
    <TextArea
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      onChange={onChange}
      value={value}
      width={width}
      height={height}
    />
  );
};

textArea.defaultProps = defaultProps;

export default textArea;
