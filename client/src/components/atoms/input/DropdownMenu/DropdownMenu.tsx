import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props extends selectProps {
  options: Array<string>;
}

interface selectProps {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const defaultProps = {
  color: myColor.primary.black,
  width: '8rem',
  height: '1.2rem',
  fontSize: '0.8rem',
};

const Select = styled.select<selectProps>`
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  color: ${(props) => props.color};
  border: 0.15rem solid;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: ${myColor.primary.darkGray};
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

const Option = styled.option``;

const getOptionList = (options: Array<string>) =>
  options.map((value) => <Option value={value}>{value}</Option>);

const RoundShortChips: React.FC<Props> = ({ width, height, fontSize, color, options }: Props) => {
  const optionList = getOptionList(options);

  return (
    <Select width={width} height={height} fontSize={fontSize} color={color}>
      <Option value="">선택안함</Option>
      {optionList}
    </Select>
  );
};

RoundShortChips.defaultProps = defaultProps;

export default RoundShortChips;
