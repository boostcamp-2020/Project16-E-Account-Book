import React from 'react';
import SocialAccountBook from './SocialAccountBook';

export default {
  title: 'Molecules/SocialAccountBook',
  component: SocialAccountBook,
};

export const socialAccountBook = (): JSX.Element => {
  return <SocialAccountBook />;
};

socialAccountBook.story = {
  name: 'SocialAccountBook',
};
