import React from 'react';
import SocialContainer from './SocialContainer';

export default {
  title: 'Atoms/div/SocialContainer',
  component: SocialContainer,
};

export const socialContainer = (): JSX.Element => {
  return <SocialContainer>SocialContainer</SocialContainer>;
};

socialContainer.story = {
  name: 'SocialContainer',
};
