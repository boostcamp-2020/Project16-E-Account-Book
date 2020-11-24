import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  border: 0px;
  cursor: pointer;
`;

const Svg = styled.svg`
  margin: 0px;
  padding: 0px;
  border: 0px;
  version: 1.1;
  baseProfile: full;
  width: 100%;
  height: 100%;
  xmlns: http://www.w3.org/2000/svg';
`;

function CreateButton(props): JSX.Element {
  return (
    <Button onClick={props.onClick}>
      <Svg>
        <polygon
          width="100%"
          height="100%"
          points="15 7 35 7 45 25 35 43 15 43 5 25"
          fill={myColor.primary.main}
          stroke={myColor.primary.kakaoBlack}
          strokeWidth="2"
        />
        <line x1="20" x2="30" y1="25" y2="25" stroke={myColor.primary.kakaoBlack} strokeWidth="2" />
        <line x1="25" x2="25" y1="20" y2="30" stroke={myColor.primary.kakaoBlack} strokeWidth="2" />
      </Svg>
    </Button>
  );
}

export default CreateButton;
