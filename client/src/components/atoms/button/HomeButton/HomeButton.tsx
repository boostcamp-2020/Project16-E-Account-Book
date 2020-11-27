import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

const defaultProps = {
  onClick: undefined,
};

const HomeButton = styled.button`
  height: 100%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const homeButton: React.FC<Props> = ({ onClick }: Props) => {
  return <HomeButton onClick={onClick}>Honey in Money</HomeButton>;
};

homeButton.defaultProps = defaultProps;

export default homeButton;
