import React from 'react';
import styled from 'styled-components';
import Minus from '@svg/minus.svg';

interface Props {
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

const IconButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Button>
      <Icon src={Minus} alt="bell icon" onClick={onClick} />
    </Button>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
