import React from 'react';
import OAuthButton from './OAuthButton';

export default {
  title: 'Atoms/button/OAuthButton',
  component: OAuthButton,
};

export const githubButton = (): JSX.Element => {
  const link = 'https://github.com/';
  const oauthSite = 'GitHub';
  const backgroundColor = '#444444';
  return (
    <OAuthButton site={oauthSite} backgroundColor={backgroundColor} link={link}>
      깃허브 계정으로 로그인
    </OAuthButton>
  );
};

export const naverButton = (): JSX.Element => {
  const link = 'https://www.naver.com/';
  const oauthSite = 'Naver';
  const backgroundColor = '#4fa42b';
  return (
    <OAuthButton site={oauthSite} backgroundColor={backgroundColor} link={link}>
      네이버 계정으로 로그인
    </OAuthButton>
  );
};

githubButton.story = {
  name: 'gitHubButton',
};

naverButton.story = {
  name: 'naverButton',
};
