import React from 'react';
import OAuthButton from './OAuthButton';

export default {
  title: 'Atoms/Button/OAuthButton',
  component: OAuthButton,
};

const onClick = (): boolean => {
  return true;
};

export const githubButton = (): JSX.Element => {
  const oauthSite = 'GitHub';
  const backgroundColor = '#444444';
  return (
    <OAuthButton site={oauthSite} backgroundColor={backgroundColor} onClick={onClick}>
      깃허브 계정으로 로그인
    </OAuthButton>
  );
};

export const naverButton = (): JSX.Element => {
  const oauthSite = 'Naver';
  const backgroundColor = '#4fa42b';
  return (
    <OAuthButton site={oauthSite} backgroundColor={backgroundColor} onClick={onClick}>
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
