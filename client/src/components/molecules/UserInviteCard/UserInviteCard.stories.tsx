import React from 'react';
import UserInviteCard from './UserInviteCard';

export default {
  title: 'Molecules/UserInviteCard',
  component: UserInviteCard,
};

export const userInviteCard = (): JSX.Element => {
  return <UserInviteCard />;
};

userInviteCard.story = {
  name: 'UserInviteCard',
};
