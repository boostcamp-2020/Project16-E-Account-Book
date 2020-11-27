import React from 'react';
import Content from './Content';

export default {
  title: 'Atoms/div/Content',
  component: Content,
};

export const content = (): JSX.Element => {
  return (
    <Content>
      <p>page의 Content를 담는 Div입니다.</p>
      <p>자유롭게 활용해보세요.</p>
    </Content>
  );
};

content.story = {
  name: 'Content',
};
