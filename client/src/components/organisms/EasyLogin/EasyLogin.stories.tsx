import React from 'react';
import EasyLogin from './EasyLogin';

export default {
  title: 'Organisms/EasyLogin',
  component: EasyLogin,
};

export const easyLogin = (): JSX.Element => {
  return <EasyLogin />;
};

easyLogin.story = {
  name: 'EasyLogin',
};
