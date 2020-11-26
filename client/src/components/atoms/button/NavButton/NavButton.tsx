import React from 'react';
import styled from 'styled-components';
import BellIcon from '@svg/bell.svg.tsx';
import SettingIcon from '@svg/setting.svg.tsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';

interface Props extends backgroundColorProps {
  name: string;
  moveUrl: string;
  iconColor?: string;
}

interface backgroundColorProps {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: 'transparent',
  iconColor: 'none',
};

const Button = styled.button<backgroundColorProps>`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: ${(props) => props.backgroundColor};
`;

const NavButton: React.FC<Props> = ({ iconColor, name, backgroundColor, moveUrl }: Props) => {
  const selectIcon = (icon: string) => {
    const width = 50;
    const height = 50;
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
    <Button backgroundColor={backgroundColor}>
      <Router>
        <Link to={moveUrl}>{selectIcon(name)}</Link>
      </Router>
    </Button>
  );
};

NavButton.defaultProps = defaultProps;

export default NavButton;
