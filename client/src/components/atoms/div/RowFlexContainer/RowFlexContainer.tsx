import React from 'react';
import styled from 'styled-components';

interface Props {
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  children: React.ReactChild[];
}

const defaultProps = {
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'center',
};

const Div = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
`;

const RowFlexContainer: React.FC<Props> = ({ children, ...props }: Props) => {
  return <Div {...props}>{children}</Div>;
};

RowFlexContainer.defaultProps = defaultProps;

export default RowFlexContainer;
