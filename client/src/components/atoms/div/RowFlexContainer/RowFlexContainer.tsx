import React from 'react';
import styled from 'styled-components';

interface Props {
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  children: React.ReactChild | React.ReactChild[];
  width?: string;
  height?: string;
}

const defaultProps = {
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'center',
  width: '',
  height: '',
};

const Div = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const RowFlexContainer: React.FC<Props> = ({ children, ...props }: Props) => {
  return <Div {...props}>{children}</Div>;
};

RowFlexContainer.defaultProps = defaultProps;

export default RowFlexContainer;
