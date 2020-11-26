import React from 'react';
import styled from 'styled-components';

interface Props {
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  margin?: string;
  children: React.ReactChild | React.ReactChild[];
}

const defaultProps = {
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'center',
  margin: '0px',
};

const Div = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
`;

const ColumnFlexContainer: React.FC<Props> = ({ children, ...props }: Props) => {
  return <Div {...props}>{children}</Div>;
};

ColumnFlexContainer.defaultProps = defaultProps;

export default ColumnFlexContainer;
