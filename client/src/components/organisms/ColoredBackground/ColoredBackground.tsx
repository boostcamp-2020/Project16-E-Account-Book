import React from 'react';
import Background from '@atoms/div/Background';
import AccountBookBackground from '@atoms/div/AccountBookBackground';

interface Props {
  backgroundColor: string;
}

const ColoredBackground: React.FC<Props> = ({ backgroundColor }: Props) => {
  return (
    <Background>
      <AccountBookBackground height="100%" backgroundColor={backgroundColor} />
    </Background>
  );
};

export default ColoredBackground;
