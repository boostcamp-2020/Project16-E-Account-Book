import React from 'react';
import LogoWithSlogan from './LogoWithSlogan';

interface Props {
  slogan: string;
}

export default {
  title: 'Organisms/LogoWithSlogan',
  component: LogoWithSlogan,
  argTypes: {
    slogan: { control: 'text' },
  },
};

export const logoWithSlogan = ({ ...props }: Props): JSX.Element => {
  return <LogoWithSlogan {...props} />;
};

logoWithSlogan.story = {
  name: 'LogoWithSlogan',
};

logoWithSlogan.args = {
  slogan: '지갑 속 꿀 같은 돈을 지키는 첫번째 방법',
};
