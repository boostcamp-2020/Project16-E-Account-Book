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
  size: '150px',
  color: myColor.primary.main,
};

const Container = styled.div<SizeProps>`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin-left: -8px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 5%;
  padding: 0;
  border: 0;
  width: 90%;
  height: 90%;
  border-radius: 50%;
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
  padding: 2% 22%;
  color: ${myColor.primary.brown};
  text-align: center;
  font-size: 1em;
`;

const hexagonButton: React.FC<Props> = ({ size, name, color, svgIcon, onClick }: Props) => {
  return (
    <Container size={size}>
      <ButtonBackground>
        <HexagonSVG fill={color} width={size} height={size} />
      </ButtonBackground>
      <ButtonContent size={size}>
        <ButtonName>{name}</ButtonName>
        {svgIcon}
      </ButtonContent>
      <Button onClick={onClick} />
    </Container>
  );
};

hexagonButton.defaultProps = defaultProps;

export default hexagonButton;
