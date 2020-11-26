import React from 'react';
import styled from 'styled-components';

const LightYellowBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const InBox = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 100vw solid transparent;
  border-top: 30vw solid #ffe6a0;
  opacity: 0.37;
`;

const lightYellowBox: React.FC = () => {
  return (
    <LightYellowBox>
      <InBox />
    </LightYellowBox>
  );
};

export default lightYellowBox;
