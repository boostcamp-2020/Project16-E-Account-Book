import React from 'react';
import Background from './Background';

export default {
  title: 'Atoms/div/Background',
  component: Background,
};

export const accountBookBackground = (): JSX.Element => {
  return (
    <Background>
      <p>여기에 배경이 될 component들을 넣어주세요</p>
    </Background>
  );
};

accountBookBackground.story = {
  name: 'Background',
};
