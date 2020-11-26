import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild[] | React.ReactChild;
}

const BackgroundContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const Background: React.FC<Props> = ({ children }: Props) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;
