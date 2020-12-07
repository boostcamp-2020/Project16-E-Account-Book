import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeButton = styled.button`
  height: 100%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const homeButton: React.FC = () => {
  return (
    <Link to="/">
      <HomeButton>Honey in Money</HomeButton>
    </Link>
  );
};

export default homeButton;
