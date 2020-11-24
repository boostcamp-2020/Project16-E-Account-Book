import React from 'react';
import OAuthButton from './OAuthButton';

export default {
  title: 'Atoms/Button/OAuthButton',
  component: [OAuthButton],
};

const onClick = (): boolean => {
  return true;
};

export const oauthbtn = (): JSX.Element => {
  return <OAuthButton onClick={onClick} />;
};

oauthbtn.story = {
  name: 'OAuthButton',
};
