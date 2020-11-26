import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const YellowBox = styled.div`
  position: absolute;
  width: 0;
  border-right: 160vw solid transparent;
  border-top: 32vh solid ${myColor.primary.dark};
  overflow: hidden;
`;

const yellowBox: React.FC = () => {
  return (
    <>
      <YellowBox />
    </>
  );
};

export default yellowBox;
