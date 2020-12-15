import React from 'react';
import styled from 'styled-components';
import BellIcon from '@svg/bell.svg';
import SettingIcon from '@svg/setting.svg';
import { Link } from 'react-router-dom';

interface Props extends backgroundColorProps {
  name: string;
  moveUrl: string;
  iconColor?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

interface backgroundColorProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const defaultProps = {
  backgroundColor: 'transparent',
  iconColor: 'none',
  width: '2rem',
  height: '2rem',
  onClick: undefined,
};

const Button = styled.button<backgroundColorProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 0;
  background-color: ${(props) => props.backgroundColor};
`;

const NavButton: React.FC<Props> = ({
  iconColor,
  name,
  backgroundColor,
  moveUrl,
  width,
  height,
  onClick,
}: Props) => {
  const selectIcon = (icon: string) => {
    switch (icon) {
      case 'bell':
        return <BellIcon height={height} width={width} stroke={iconColor} />;
      case 'setting':
        return <SettingIcon height={height} width={width} fill={iconColor} />;
      default:
        return <BellIcon height={height} width={width} fill={iconColor} />;
    }
  };

  return (
    <Button onClick={onClick} width={width} height={height} backgroundColor={backgroundColor}>
      <Link to={moveUrl}>{selectIcon(name)}</Link>
    </Button>
  );
};

NavButton.defaultProps = defaultProps;

export default NavButton;
