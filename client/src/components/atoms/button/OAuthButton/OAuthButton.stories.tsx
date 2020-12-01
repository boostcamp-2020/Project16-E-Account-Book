import React from 'react';
import OAuthButton from './OAuthButton';

export default {
  title: 'Atoms/button/OAuthButton',
  component: OAuthButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    link: { control: 'text' },
    site: { control: 'text' },
  },
};

interface Props {
  backgroundColor: string;
  link: string;
  site: string;
}

export const githubButton = ({ ...args }: Props): JSX.Element => {
  return <OAuthButton {...args}>깃허브 계정으로 로그인</OAuthButton>;
};

export const naverButton = ({ ...args }: Props): JSX.Element => {
  return <OAuthButton {...args}>네이버 계정으로 로그인</OAuthButton>;
};

githubButton.story = {
  name: 'gitHubButton',
};

githubButton.args = {
  backgroundColor: '#444444',
  link: 'https://github.com/',
  site: 'GitHub',
};

naverButton.story = {
  name: 'naverButton',
};

naverButton.args = {
  backgroundColor: '#4fa42b',
  link: 'https://www.naver.com/',
  site: 'Naver',
};
