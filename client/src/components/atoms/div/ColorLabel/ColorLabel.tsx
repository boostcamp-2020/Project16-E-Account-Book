import React from 'react';
import styled from 'styled-components';

interface Props extends SizeProps {
  backgroundColor: string;
  onClick?: () => void;
}

interface SizeProps {
  size?: string;
}

const defaultProps = {
  size: '1.5rem',
  onClick: undefined,
};

const Div = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50px;
`;

const ColorLabel: React.FC<Props> = ({ ...args }: Props) => {
  return <Div {...args} />;
};

ColorLabel.defaultProps = defaultProps;

export default ColorLabel;
