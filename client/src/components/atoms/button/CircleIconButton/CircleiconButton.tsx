import React from 'react';
import styled from 'styled-components';
import Pencil from '@svg/pencil.svg';

interface Props extends ColorProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface ColorProps {
  backgroundColor: string;
}

const PencilIcon = styled.img`
  width: 40px;
  max-width: 40px;
`;

const Test = styled.div<ColorProps>`
  height: 40px;
  border-radius: 70%;
  background-color: ${(props) => props.backgroundColor};
`;

const CircleIconButton = styled.button`
  background-color: white;
  border: 0;
`;

const circleIconButton: React.FC<Props> = ({ onClick, backgroundColor }: Props) => {
  return (
    <CircleIconButton onClick={onClick}>
      <Test backgroundColor={backgroundColor}>
        <PencilIcon src={Pencil} />
      </Test>
    </CircleIconButton>
  );
};

export default circleIconButton;
