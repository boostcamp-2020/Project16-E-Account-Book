import React from 'react';
// import myColor from '@theme/color';
import ChangeAccountbookColorCard from './ChangeAccountbookColorCard';

export default {
  title: 'Organisms/ChangeAccountbookColorCard',
  component: ChangeAccountbookColorCard,
};

export const changeAccountbookColorCard = (): JSX.Element => {
  return <ChangeAccountbookColorCard />;
};

changeAccountbookColorCard.story = {
  name: 'ChangeAccountbookColorCard',
};
