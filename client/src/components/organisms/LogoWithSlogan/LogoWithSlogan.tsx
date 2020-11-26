import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import Logo from '@atoms/img/Logo';
import BoldSpan from '@atoms/span/BoldSpan';
import Slogan from '@atoms/p/CenterLargeText';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props {
  slogan: string;
}

const Wrapper = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const LogoWithSlogan: React.FC<Props> = ({ slogan }: Props) => {
  const fontSize = '2vw';
  return (
    <Wrapper>
      <ColumFlexContainer>
        <Logo />
        <BoldSpan>
          <Slogan color={myColor.primary.gray} fontSize={fontSize}>
            {slogan}
          </Slogan>
        </BoldSpan>
      </ColumFlexContainer>
    </Wrapper>
  );
};

export default LogoWithSlogan;
