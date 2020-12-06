import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import HomeButton from '@atoms/button/HomeButton';
import NavButton from '@atoms/button/NavButton';

interface Props {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const FlexRowBox = styled.div<Props>`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 2rem;
  background-color: ${(props) => props.backgroundColor};
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

const TopNavBar: React.FC<Props> = ({ backgroundColor }: Props) => {
  return (
    <FlexRowBox backgroundColor={backgroundColor}>
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

TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
