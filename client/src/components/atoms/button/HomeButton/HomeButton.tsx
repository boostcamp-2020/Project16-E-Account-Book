import React, { useState } from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const HomeButton = styled.button`
  width: 30%;
  height: 100%;
  background-color: ${myColor.primary.main}};
  border: 0;
`;

function homeButton() {
  const [count, setCount] = useState(0);

  function onClickHandler(e: MouseEvent) {
    e.preventDefault();
    setCount(count + 1);
  }

  return <HomeButton onClick={onClickHandler}>Honey in Money{count}</HomeButton>;
}

export default homeButton;
