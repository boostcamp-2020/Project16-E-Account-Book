import React from 'react';
import styled from 'styled-components';

const YellowBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const InBox = styled.div`
  position: absolute;
  width: 0%;
  border-right: 100vw solid transparent;
  border-top: 30vw solid #f4c238;
`;

const yellowBox: React.FC = () => {
  return (
    <YellowBox>
      <InBox />
    </YellowBox>
  );
};

export default yellowBox;
