import React from 'react';
import UserInviteCard from './UserInviteCard';

interface Props {
  link: string;
  userId: number;
  stateId: number;
  bookId: number;
  name: string;
  callback: any;
  backgroundColor: string;
  buttonName: string;
}

export default {
  title: 'Molecules/UserInviteCard',
  component: UserInviteCard,
};

export const userInviteCard = ({
  link,
  stateId,
  userId,
  bookId,
  name,
  callback,
  backgroundColor,
  buttonName,
}: Props): JSX.Element => {
  return (
    <UserInviteCard
      link={link}
      stateId={stateId}
      userId={userId}
      bookId={bookId}
      callback={callback}
      name={name}
      backgroundColor={backgroundColor}
      buttonName={buttonName}
    />
  );
};

userInviteCard.story = {
  name: 'UserInviteCard',
};
