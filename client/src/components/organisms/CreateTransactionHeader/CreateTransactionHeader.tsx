import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import Text from '@atoms/p/LeftLargeText';
import Button from '@atoms/button/IconDetailButton';
import FlexContainer from '@atoms/div/RowFlexContainer';

interface Props {
  margin: string;
}

const Container = styled.div<Props>`
  margin-left: ${(props) => props.margin};
`;

const createTransactionHeader: React.FC = () => {
  return (
    <FlexContainer width="100%">
      <Text>새로운 내역을 추가해보세요!</Text>
      <Container margin="auto">
        <Button name="csv" color={myColor.primary.green} />
      </Container>
      <Container margin="24px">
        <Button name="sms" />
      </Container>
    </FlexContainer>
  );
};

export default createTransactionHeader;