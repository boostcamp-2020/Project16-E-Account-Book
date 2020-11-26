import React from 'react';
import DescriptionLine from './DescriptionLine';

interface Props {
  description: string;
}

export default {
  title: 'Molecules/DescriptionLine',
  component: DescriptionLine,
  argTypes: {
    description: { control: 'text' },
  },
};

export const descriptionLine = ({ ...props }: Props): JSX.Element => {
  return <DescriptionLine {...props} />;
};

descriptionLine.story = {
  name: 'DescriptionLine',
};

descriptionLine.args = {
  description: '간편 로그인',
};
