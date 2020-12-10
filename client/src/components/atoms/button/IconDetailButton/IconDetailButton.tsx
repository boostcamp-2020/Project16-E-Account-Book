import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import CSVIcon from '@svg/csv.svg.tsx';
import MessageIcon from '@svg/message.svg.tsx';
import InformationIcon from '@svg/information.svg.tsx';

interface Props extends ColorProps {
  name: string;
  onClick?: () => void;
}

interface ColorProps {
  color?: string;
}

const defaultProps = {
  color: myColor.primary.darkGray,
  onClick: undefined,
};

const Button = styled.button<ColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  background-color: transparent;
  border: 0px;
  padding: 0px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const RowFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2px 0;
  * {
    margin: 0;
    padding: 0;
  }
`;

const ButtonName = styled.p<ColorProps>`
  padding-right: 4px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const iconDetailButton: React.FC<Props> = ({ color, name, onClick }: Props) => {
  const selectIcon = (icon: string) => {
    const iconWidth = 50;
    const iconHeight = 50;
    switch (icon) {
      case 'csv':
        return <CSVIcon height={iconHeight} width={iconWidth} fill={color} />;
      case 'sms':
        return <MessageIcon height={iconHeight} width={iconWidth} fill={color} />;
      default:
        return <CSVIcon height={iconHeight} width={iconWidth} fill={color} />;
    }
  };

  return (
    <Button type="button" onClick={onClick} color={color}>
      {selectIcon(name)}
      <RowFlexContainer>
        <ButtonName>{name}</ButtonName>
        <InformationIcon height={16} width={16} fill={color} />
      </RowFlexContainer>
    </Button>
  );
};

iconDetailButton.defaultProps = defaultProps;

export default iconDetailButton;
