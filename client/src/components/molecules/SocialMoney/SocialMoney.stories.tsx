import React from 'react';
import SocialMoney from './SocialMoney';

export default {
  title: 'Molecules/SocialMoney',
  component: SocialMoney,
};

export const socialMoney = (): JSX.Element => {
  return <SocialMoney fontSize="15px" inMoney={321321} exMoney={213124} />;
};

socialMoney.story = {
  name: 'SocialMoney',
};
