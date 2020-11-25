import React from 'react';
import BeeLogo from './BeeLogo';

export default {
  title: 'Atoms/Img/BeeLogo',
  component: BeeLogo,
};

export const beeLogo = (): JSX.Element => {
  return <BeeLogo />;
};

beeLogo.story = {
  name: 'BeeLogo',
};
