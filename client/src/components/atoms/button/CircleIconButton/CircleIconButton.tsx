import React from 'react';
import styled from 'styled-components';

interface Props extends ColorProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactChild;
}

interface ColorProps {
  backgroundColor: string;
}

const Icons = styled.img`
  width: 40px;
  max-width: 40px;
`;

const IconBackground = styled.div<ColorProps>`
  height: 40px;
  border-radius: 70%;
  background-color: ${(props) => props.backgroundColor};
`;

const CircleIconButton = styled.button`
  background-color: white;
  border: 0;
`;

const circleIconButton: React.FC<Props> = ({ onClick, backgroundColor, children }: Props) => {
  const Icon = children.toString();
  return (
    <CircleIconButton onClick={onClick}>
      <IconBackground backgroundColor={backgroundColor}>
        <Icons src={Icon} />
      </IconBackground>
    </CircleIconButton>
  );
};

export default circleIconButton;
