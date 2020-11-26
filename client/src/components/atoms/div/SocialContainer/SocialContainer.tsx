import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
  width?: string;
  height?: string;
  children: React.ReactChild | React.ReactChild[];
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
  width: '500px',
  height: '120px',
};

const SocialContainer = styled.div<Props>`
  display: flex;
  flex-flow: row;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px gray;
`;

const socialContainer: React.FC<Props> = ({ backgroundColor, width, height, children }: Props) => {
  return (
    <SocialContainer backgroundColor={backgroundColor} width={width} height={height}>
      {children}
    </SocialContainer>
  );
};

SocialContainer.defaultProps = defaultProps;

export default socialContainer;
