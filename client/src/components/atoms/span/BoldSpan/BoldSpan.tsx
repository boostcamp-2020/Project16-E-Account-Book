import React from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  children: React.ReactChild;
}

const defaultProps = {
  color: 'black',
};

const Span = styled.span<Props>`
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  color: ${(props) => props.color};
`;

const BoldSpan: React.FC<Props> = ({ color, children }: Props) => {
  return <Span color={color}>{children}</Span>;
};

BoldSpan.defaultProps = defaultProps;

export default BoldSpan;
