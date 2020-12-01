import React from 'react';
// import myColor from '@theme/color';
import InviteAccountbookCard from './InviteAccountbookCard';

interface Props {
  links: string[];
}

export default {
  title: 'molecules/InviteAccountbookCard',
  component: InviteAccountbookCard,
};

export const inviteAccountbookCard = ({ ...args }: Props): JSX.Element => {
  return <InviteAccountbookCard {...args} />;
};

inviteAccountbookCard.story = {
  name: 'InviteAccountbookCard',
};

inviteAccountbookCard.args = {
  links: [
    'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
    'https://avatars3.githubusercontent.com/u/55074799?s=460&u=2f70319c2f55ba5e26db060ba21d66a9cab35732&v=4',
    'https://avatars2.githubusercontent.com/u/50297117?s=460&u=2ddc78ef0045b75f6fb405f1763304a7481d46e4&v=4',
  ],
};
