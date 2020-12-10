import React from 'react';
import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import UserImage from '@atoms/img/UserImage';
import Logout from '@atoms/button/TextButton';
import Span from '@atoms/span/BoldSpan';
import P from '@atoms/p/LeftNormalText';
import myColor from '@theme/color';
import { Link } from 'react-router-dom';
import { logout } from '@actions/user/type';
import { useDispatch } from 'react-redux';

interface Props {
  name: string;
  profile: string;
}

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const Container = styled.div`
  margin: 48px 20px 0px;
`;

const MyPageUserMenu: React.FC<Props> = ({ name, profile }: Props) => {
  const dispatch = useDispatch();

  const deleteJWT = () => {
    localStorage.removeItem('jwt');
    dispatch(logout());
  };
  return (
    <Container>
      <RowFlexContainer>
        <UserImage link={profile} />
        <ColumnFlexContainer alignItems="flex-start" margin="0 20px">
          <P>
            <Span>{name}</Span> 님
          </P>
          <P>안녕하세요</P>
        </ColumnFlexContainer>
        <ButtonContainer>
          <Link to="login">
            <Logout onClick={deleteJWT} color={myColor.primary.black}>
              <Span>로그아웃</Span>
            </Logout>
          </Link>
        </ButtonContainer>
      </RowFlexContainer>
    </Container>
  );
};

export default MyPageUserMenu;
