import React from 'react';
import styled from 'styled-components';
import Line from '@atoms/hr/Line';
import Text from '@atoms/p/CenterNormalText';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import myColor from '@theme/color';

interface Props {
  description: string;
}

const TextContainer = styled.div`
  width: 100%;
  margin: 0 4vw;
`;

const DescriptionLine: React.FC<Props> = ({ description }: Props) => {
  const fontSize = '1vw';
  return (
    <RowFlexContainer>
      <Line />
      <TextContainer>
        <Text color={myColor.primary.gray} fontSize={fontSize}>
          {description}
        </Text>
      </TextContainer>
      <Line />
    </RowFlexContainer>
  );
};

export default DescriptionLine;
