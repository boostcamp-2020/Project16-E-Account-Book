import React from 'react';
import styled from 'styled-components';
import YellowBox from '@atoms/div/YellowBox';
import LightYellowBox from '@atoms/div/LightYellowBox';

const BoxContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
  width: 100%;
`;

const YellowOverlapBackground: React.FC = () => {
  return (
    <BoxContainer>
      <YellowBox />
      <LightYellowBox />
    </BoxContainer>
  );
};

export default YellowOverlapBackground;
