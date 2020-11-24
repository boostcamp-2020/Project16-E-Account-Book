import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const HomeButton = styled.button`
  width: 30%;
  height: 100%;
  background-color: ${myColor.primary.main}};
  border: 0;
`;

function homeButton() {
  return <HomeButton>Honey in Money</HomeButton>;
}

export default homeButton;
