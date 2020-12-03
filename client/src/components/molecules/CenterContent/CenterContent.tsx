import React from 'react';
import styled from 'styled-components';
import Content from '@atoms/div/Content';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const CenterContent: React.FC<Props> = ({ children }: Props) => {
  return (
    <Wrapper>
      <ColumnFlexContainer height="100%">
        <Content>{children}</Content>
      </ColumnFlexContainer>
    </Wrapper>
  );
};

export default CenterContent;
