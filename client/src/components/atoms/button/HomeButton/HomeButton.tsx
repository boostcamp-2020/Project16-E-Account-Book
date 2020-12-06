import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  onClick?: () => void;
}

const defaultProps = {
  onClick: undefined,
};

const HomeButton = styled.button`
  height: 100%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const homeButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Link to="/">
      <HomeButton onClick={onClick}>Honey in Money</HomeButton>
    </Link>
  );
};

homeButton.defaultProps = defaultProps;

export default homeButton;
