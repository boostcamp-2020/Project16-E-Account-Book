import React from 'react';
import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import UserImage from '@atoms/img/UserImage';
import Logout from '@atoms/button/TextButton';
import Span from '@atoms/span/BoldSpan';
import P from '@atoms/p/LeftNormalText';
import myColor from '@theme/color';

interface Props {
  name: string;
  profile: string;
}

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const MyPageUserMenu: React.FC<Props> = ({ name, profile }: Props) => {
  return (
    <RowFlexContainer margin="48px 20px 0px">
      <UserImage link={profile} />
      <ColumnFlexContainer alignItems="flex-start" margin="0 20px">
        <P>
          <Span>{name}</Span> 님
        </P>
        <P>안녕하세요</P>
      </ColumnFlexContainer>
      <ButtonContainer>
        <Logout color={myColor.primary.black}>
          <Span>로그아웃</Span>
        </Logout>
      </ButtonContainer>
    </RowFlexContainer>
  );
};

export default MyPageUserMenu;
