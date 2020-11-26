import React from 'react';
import OAuthButtonList from './OAuthButtonList';

export default {
  title: 'Molecules/OAuthButtonList',
  component: OAuthButtonList,
};

export const oauthButtonList = (): JSX.Element => {
  return <OAuthButtonList />;
};

oauthButtonList.story = {
  name: 'OAuthButtonList',
};
