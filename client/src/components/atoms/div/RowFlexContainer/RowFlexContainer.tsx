import React from 'react';
import styled from 'styled-components';

interface Props {
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  children?: React.ReactChild | React.ReactChild[];
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  flexWrap?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
  position?: string;
  backgroundColor?: string;
  zIndex?: string;
}

const defaultProps = {
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'center',
  margin: '0',
  width: '',
  height: '',
  flexWrap: 'nowrap',
  borderWidth: '',
  borderStyle: '',
  borderRadius: '',
  children: '',
  padding: '0',
  position: 'static',
  backgroundColor: 'transparant',
  zIndex: 'auto',
};

const Div = styled.div<Props>`
  display: flex;
  flex-direction: row;
  max-width: 1195px;
  z-index: ${(props) => props.zIndex};
  justify-content: ${(props) => props.justifyContent};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-wrap: ${(props) => props.flexWrap};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) => props.borderStyle};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  background-color: ${(props) => props.backgroundColor};
`;

const RowFlexContainer: React.FC<Props> = ({ children, ...props }: Props) => {
  return <Div {...props}>{children}</Div>;
};

RowFlexContainer.defaultProps = defaultProps;

export default RowFlexContainer;
