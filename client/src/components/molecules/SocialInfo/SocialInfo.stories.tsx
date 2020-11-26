import React from 'react';
import SocialInfo from './SocialInfo';

export default {
  title: 'Molecules/SocialInfo',
  component: SocialInfo,
};

export const socialInfo = (): JSX.Element => {
  return <SocialInfo title="부캠가계부" description="부스트캠프 가계부 입니다" />;
};

socialInfo.story = {
  name: 'SocialInfo',
};
