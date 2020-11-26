import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild;
  onClick?: () => void;
}

const defaultProps = {
  onClick: undefined,
};

const Icon = styled.img`
  width: 2em;
  height: 2em;
  cursor: pointer;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
`;

const IconButton: React.FC<Props> = ({ onClick, children }: Props) => {
  const src: string = children.toString();
  return (
    <Button>
      <Icon src={src} alt="icon" onClick={onClick} />
    </Button>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
