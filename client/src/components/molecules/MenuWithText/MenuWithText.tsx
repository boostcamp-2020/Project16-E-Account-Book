import React from 'react';
import styled from 'styled-components';
import DropdownMenu from '@atoms/input/DropdownMenu';
import CenterSmallText from '@atoms/p/CenterSmallText';

interface Props extends sizeProps {
  options: string[];
  title: string;
}

interface sizeProps {
  width?: string;
}

const defaultProps = {
  width: '15%',
};

const MenuWithText = styled.div<sizeProps>`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width};
`;

const menuWithText: React.FC<Props> = ({ width, title, options }: Props) => {
  return (
    <MenuWithText width={width}>
      <CenterSmallText>{title}</CenterSmallText>
      <DropdownMenu options={options} />
    </MenuWithText>
  );
};

MenuWithText.defaultProps = defaultProps;

export default menuWithText;
