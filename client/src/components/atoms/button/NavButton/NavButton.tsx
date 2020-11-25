import React from 'react';
import styled from 'styled-components';
import Bell from '@svg/bell.svg';
import myColor from '@theme/color';
import { BrowserRouter as Router, Link } from 'react-router-dom';

interface Props extends backgroundColorProps {
  moveUrl: string;
}

interface backgroundColorProps {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const BellIcon = styled.img`
  width: 2em;
  height: 2em;
`;

const Button = styled.button<backgroundColorProps>`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: ${(props) => props.backgroundColor};
`;

const NavButton: React.FC<Props> = ({ backgroundColor, moveUrl }: Props) => {
  return (
    <Button backgroundColor={backgroundColor}>
      <Router>
        <Link to={moveUrl}>
          <BellIcon src={Bell} alt="bell icon" />
        </Link>
      </Router>
    </Button>
  );
};

NavButton.defaultProps = defaultProps;

export default NavButton;
