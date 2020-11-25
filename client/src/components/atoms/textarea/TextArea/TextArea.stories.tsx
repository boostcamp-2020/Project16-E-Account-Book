import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
};

export const textArea = (): JSX.Element => {
  const height = '120px';
  const width = '300px';
  return <TextArea width={width} height={height} />;
};

textArea.story = {
  name: 'TextArea',
};
