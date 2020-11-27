import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const LightYellowBox = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  left: -40vw;
  border-left: 140vw solid transparent;
  border-top: 28vh solid ${myColor.primary.light};
  opacity: 0.37;
`;

const lightYellowBox: React.FC = () => {
  return (
    <>
      <LightYellowBox />
    </>
  );
};

export default lightYellowBox;
