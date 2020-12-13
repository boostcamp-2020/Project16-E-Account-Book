import React from 'react';
import InvitationCard from './InvitationCard';

interface Props {
  master: string;
  name: string;
}

export default {
  title: 'molecules/InvitationCard',
  component: InvitationCard,
  argTypes: {
    master: { control: 'text' },
    name: { control: 'text' },
  },
};

export const invitationCard = ({ ...args }: Props): JSX.Element => {
  const callback = () => {
    return true;
  };
  return <InvitationCard {...args} callback={callback} />;
};

invitationCard.story = {
  name: 'InvitationCard',
};

invitationCard.args = {
  master: '김도연',
  name: '부스트 동아리',
};
