import React from 'react';
import styled from 'styled-components';

const YellowBox = styled.div`
  position: relative;
`;

const InBox = styled.div`
  position: absolute;
  width: 30vw;
  height: 0;
  border-right: 35vw solid transparent;
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
