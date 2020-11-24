import React from 'react';
import styled from 'styled-components';
import Logo from '@svg/naver-logo.svg';

interface Props {
  onClick: () => void;
}

const OAuthButton = styled.button`
  width: 50%;
  height: 75px;
  border: 0;
  display: flex;
  font-size: 20px;
`;

const OAuthIcon = styled.img`
  background-color: white;
  height: 100%;
`;

const OAuthName = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #4fa42b;
  color: white;
  border-radius: 5px;
`;

const oauthButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <OAuthButton onClick={onClick}>
      <OAuthIcon src={Logo} alt="logo" />
      <OAuthName>네이버 계정으로 로그인</OAuthName>
    </OAuthButton>
  );
};

export default oauthButton;
