import React from 'react';
import styled from 'styled-components';
import Naver from '@svg/naver-logo.svg';
import GitHub from '@svg/github-logo.svg';

interface Props {
  onClick: () => void;
  site: string;
  backgroundColor: string;
  children: React.ReactChild;
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

const OAuthName = styled.div<Props>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 5px;
`;

const oauthButton: React.FC<Props> = ({ onClick, backgroundColor, site, children }: Props) => {
  return (
    <OAuthButton onClick={onClick}>
      <OAuthIcon src={site === 'Naver' ? Naver : GitHub} alt="logo" />
      <OAuthName backgroundColor={backgroundColor}>{children}</OAuthName>
    </OAuthButton>
  );
};

export default oauthButton;
