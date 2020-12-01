import React from 'react';
// import myColor from '@theme/color';
import InviteAccountbookCard from './InviteAccountbookCard';

export default {
  title: 'Organisms/InviteAccountbookCard',
  component: InviteAccountbookCard,
};

export const inviteAccountbookCard = (): JSX.Element => {
  return <InviteAccountbookCard />;
};

inviteAccountbookCard.story = {
  name: 'InviteAccountbookCard',
};
