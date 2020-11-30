import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import HexagonSVG from '@svg/hexagon.svg';

interface Props extends SizeProps {
  name: string;
  color?: string;
  svgIcon: React.ReactElement<SVGSVGElement>;
  onClick: () => void;
}

interface SizeProps {
  size?: string;
}

const defaultProps = {
  size: '200px',
  color: myColor.primary.main,
};

const Button = styled.button`
  position: relative;
  margin: 0px;
  padding: 0px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`;

const ButtonBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ButtonContent = styled.div<SizeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: 0;
  left: 0;
  z-index: 2;
`;

const ButtonName = styled.p`
  width: ${(props) => props.size};
  padding: 2% 24%;
  color: ${myColor.primary.brown};
  font-size: 1.6em;
`;

const CreateButton: React.FC<Props> = ({ size, name, color, svgIcon, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <ButtonBackground>
        <HexagonSVG fill={color} width={size} height={size} />
      </ButtonBackground>
      <ButtonContent size={size}>
        <ButtonName>{name}</ButtonName>
        {svgIcon}
      </ButtonContent>
    </Button>
  );
};

CreateButton.defaultProps = defaultProps;

export default CreateButton;
