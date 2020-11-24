import React from 'react';
import OAuthButton from './OAuthButton';

export default {
  title: 'Atoms/Button/OAuthButton',
  component: [OAuthButton],
};

const onClick = (): boolean => {
  return true;
};

export const githubbtn = (): JSX.Element => {
  const oauthSite = 'Github';
  const backgroundColor = '#444444';
  return (
    <OAuthButton site={oauthSite} backgroundColor={backgroundColor} onClick={onClick}>
      깃허브 계정으로 로그인
    </OAuthButton>
  );
};

export const naverbtn = (): JSX.Element => {
  const oauthSite = 'Naver';
  const backgroundColor = '#4fa42b';
  return (
    <OAuthButton site={oauthSite} backgroundColor={backgroundColor} onClick={onClick}>
      네이버 계정으로 로그인
    </OAuthButton>
  );
};

githubbtn.story = {
  name: 'gitHubButton',
};

naverbtn.story = {
  name: 'naverButton',
};
