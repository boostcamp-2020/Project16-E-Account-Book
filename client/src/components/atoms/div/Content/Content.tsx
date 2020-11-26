import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild[] | React.ReactChild;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-width: 300px;
`;

const Content: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Content;
