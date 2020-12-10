import React from 'react';
import styled from 'styled-components';
import DropdownMenu from '@atoms/input/DropdownMenu';
import Text from '@atoms/p/LeftNormalText';

interface OptionData {
  id: any;
  name: any;
}

interface Props extends sizeProps {
  options: OptionData[];
  title: string;
  value?: any;
  onChange?: any;
}

interface sizeProps {
  width?: string;
}

const defaultProps = {
  width: '15%',
  value: undefined,
  onChange: undefined,
};

const MenuWithText = styled.div<sizeProps>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

const menuWithText: React.FC<Props> = ({ width, title, options, value, onChange }: Props) => {
  return (
    <MenuWithText width={width}>
      <Text>{title}</Text>
      <DropdownMenu width="70%" options={options} value={value} onChange={onChange} />
    </MenuWithText>
  );
};

MenuWithText.defaultProps = defaultProps;

export default menuWithText;
