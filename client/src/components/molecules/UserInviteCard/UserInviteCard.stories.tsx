import React from 'react';
import UserInviteCard from './UserInviteCard';

interface Props {
  link: string;
  id: number;
  bookId: number;
  name: string;
  callback: (boolean) => void;
  backgroundColor: string;
  isWaiting: boolean;
}

export default {
  title: 'Molecules/UserInviteCard',
  component: UserInviteCard,
};

export const userInviteCard = ({
  link,
  id,
  bookId,
  name,
  callback,
  backgroundColor,
  isWaiting,
}: Props): JSX.Element => {
  return (
    <UserInviteCard
      link={link}
      id={id}
      bookId={bookId}
      name={name}
      callback={callback}
      backgroundColor={backgroundColor}
      isWaiting={isWaiting}
    />
  );
};

userInviteCard.story = {
  name: 'UserInviteCard',
};
