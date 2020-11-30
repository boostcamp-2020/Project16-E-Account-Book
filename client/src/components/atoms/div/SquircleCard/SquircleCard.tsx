import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
  width?: string;
  height?: string;
  children: React.ReactChild | React.ReactChild[];
  flexFlow?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
  width: '500px',
  height: '120px',
  flexFlow: 'row',
};

const SquircleCard = styled.div<Props>`
  margin-top: 1rem;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-flow: ${(props) => props.flexFlow};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  max-width: 1200px;
  height: ${(props) => props.height};
  border-radius: 10px;
  box-shadow: 0px 5px 7px 1px ${myColor.primary.gray};
`;

const squircleCard: React.FC<Props> = ({
  backgroundColor,
  width,
  height,
  children,
  flexFlow,
}: Props) => {
  return (
    <SquircleCard
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      flexFlow={flexFlow}
    >
      {children}
    </SquircleCard>
  );
};

SquircleCard.defaultProps = defaultProps;

export default squircleCard;
