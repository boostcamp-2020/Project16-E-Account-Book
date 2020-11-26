import React from 'react';
import Content from '@atoms/div/Content';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props {
  children: React.ReactChild[];
}

const CenterContent: React.FC<Props> = ({ children }: Props) => {
  return (
    <ColumnFlexContainer>
      <Content>{children}</Content>
    </ColumnFlexContainer>
  );
};

export default CenterContent;
