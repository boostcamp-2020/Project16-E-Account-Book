import React from 'react';
import styled from 'styled-components';
import Naver from '@svg/naver-logo.svg';
import GitHub from '@svg/github-logo.svg';
import Test from '@svg/test-logo.svg';
import myColor from '@theme/color';

interface Props extends ColorProps {
  link: string;
  site: string;
  children: React.ReactChild;
}

interface ColorProps {
  backgroundColor: string;
}

const OAuthButton = styled.a`
  width: 100%;
  max-width: 320px;
  height: 60px;
  border: 0;
  display: flex;
  font-size: 20px;
  margin: 5px 0px;
  background: transparent;
  text-decoration: none;
`;

const OAuthIcon = styled.img`
  background-color: ${myColor.primary.white};
  height: 100%;
`;

const OAuthName = styled.div<ColorProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${myColor.primary.white};
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 530px) {
    font-size: 7px;
  }
`;

const oauthButton: React.FC<Props> = ({ link, backgroundColor, site, children }: Props) => {
  const selectSite = (oauth: string) => {
    switch (oauth) {
      case 'Naver':
        return Naver;
      case 'GitHub':
        return GitHub;
      default:
        return Test;
    }
  };
  return (
    <OAuthButton href={link}>
      <OAuthIcon src={selectSite(site)} alt="logo" />
      <OAuthName backgroundColor={backgroundColor}>{children}</OAuthName>
    </OAuthButton>
  );
};

export default oauthButton;
