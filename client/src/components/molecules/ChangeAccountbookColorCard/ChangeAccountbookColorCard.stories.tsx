import React from 'react';
import ChangeAccountbookColorCard from './ChangeAccountbookColorCard';

interface Props {
  labelColor: string;
}

export default {
  title: 'molecules/ChangeAccountbookColorCard',
  component: ChangeAccountbookColorCard,
  argTypes: {
    labelColor: { control: 'color' },
  },
};

export const changeAccountbookColorCard = ({ ...args }: Props): JSX.Element => {
  return <ChangeAccountbookColorCard {...args} />;
};

changeAccountbookColorCard.story = {
  name: 'ChangeAccountbookColorCard',
};

changeAccountbookColorCard.args = {
  labelColor: 'blue',
};
