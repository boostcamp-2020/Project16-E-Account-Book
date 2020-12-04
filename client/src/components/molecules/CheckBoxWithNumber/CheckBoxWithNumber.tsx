import React from 'react';
import styled from 'styled-components';
import CheckBox from '@atoms/checkbox/CheckBox';
import NumberText from '@atoms/p/NumberText';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  checked: boolean;
  color: string;
  description: string;
  fontWeight: string;
  fontSize: string;
  money: number;
}

const CheckBoxWithNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80px;
  height: 50px;
`;

const checkBoxWithNumber: React.FC<Props> = ({
  onClick,
  checked,
  description,
  color,
  fontWeight,
  fontSize,
  money,
}: Props) => {
  return (
    <CheckBoxWithNumber>
      <CheckBox description={description} color={color} checked={checked} onClick={onClick} />
      <NumberText fontWeight={fontWeight} fontSize={fontSize} color={color} money={money} />
    </CheckBoxWithNumber>
  );
};

export default checkBoxWithNumber;
