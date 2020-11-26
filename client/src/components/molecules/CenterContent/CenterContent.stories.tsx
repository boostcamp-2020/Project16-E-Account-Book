import React from 'react';
import CenterContent from './CenterContent';

export default {
  title: 'Molecules/CenterContent',
  component: CenterContent,
};

export const centerContent = (): JSX.Element => {
  return (
    <CenterContent>
      <p>CenterContent를 통해 Content의 내용들을 가운데 정렬할 수 있습니다.</p>
      <p>자유롭게 활용해보세요.</p>
    </CenterContent>
  );
};

centerContent.story = {
  name: 'CenterContent',
};
