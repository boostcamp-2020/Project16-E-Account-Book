import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface OptionData {
  id: any;
  name: any;
}

interface Props extends selectProps {
  options: OptionData[];
  value?: any;
  onChange?: any;
  isIncome?: boolean;
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
  fontSize: '1rem',
  value: undefined,
  onChange: undefined,
  isIncome: false,
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

const Option = styled.option`
  font-size: 1rem;
`;

const getOptionList = (options: Array<OptionData>) =>
  options.map((value) => (
    <Option key={value.id} value={value.id}>
      {value.name}
    </Option>
  ));

const DropdownMenu: React.FC<Props> = ({
  width,
  height,
  fontSize,
  color,
  options,
  value,
  onChange,
  isIncome,
}: Props) => {
  const optionList = getOptionList(options);

  return (
    <Select
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      value={value}
      onChange={onChange}
      disabled={isIncome}
    >
      <Option key="-1" value="">
        선택안함
      </Option>
      {optionList}
    </Select>
  );
};

DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
