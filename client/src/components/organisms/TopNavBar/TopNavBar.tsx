import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import HomeButton from '@atoms/button/HomeButton';
import NavButton from '@atoms/button/NavButton';

const FlexRowBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: ${myColor.primary.main};
  z-index: 1;
  position: fixed;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
  height: 100%;
  background-color: transparent;
`;

const TopNavBar: React.FC = () => {
  return (
    <FlexRowBox>
      <HomeButton />
      <FlexRowContainer>
        <NavButton
          moveUrl="/"
          name="bell"
          width="60%"
          height="70%"
          iconColor={myColor.primary.black}
        />
        <NavButton
          moveUrl="/"
          name="setting"
          width="60%"
          height="70%"
          iconColor={myColor.primary.black}
        />
      </FlexRowContainer>
    </FlexRowBox>
  );
};

export default TopNavBar;
