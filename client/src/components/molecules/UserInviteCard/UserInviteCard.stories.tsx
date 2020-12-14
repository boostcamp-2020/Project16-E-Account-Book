import React from 'react';
import UserInviteCard from './UserInviteCard';

interface Props {
  link: string;
  id: number;
  name: string;
  callback: (boolean) => void;
}

export default {
  title: 'Molecules/UserInviteCard',
  component: UserInviteCard,
};

export const userInviteCard = ({ link, id, name, callback }: Props): JSX.Element => {
  return <UserInviteCard link={link} id={id} name={name} callback={callback} />;
};

userInviteCard.story = {
  name: 'UserInviteCard',
};
