import React from 'react';
import styled from 'styled-components';
import Input from '@atoms/input/Input';
import Text from '@atoms/p/LeftNormalText';
import DateWithText from '@atoms/div/RowFlexContainer';

interface Props {
  title: string;
  type: string;
  width?: string;
  margin?: string;
  justifyContent?: string;
}

const defaultProps = {
  width: '100%',
  margin: '',
  justifyContent: 'flex-start',
};

const Container = styled.div`
  margin-right: 10px;
`;

const dateWithText: React.FC<Props> = ({ width, title, margin, justifyContent, type }: Props) => {
  return (
    <DateWithText width={width} margin={margin} justifyContent={justifyContent}>
      <Container>
        <Text>{title}</Text>
      </Container>
      <Input type={type} width="70%" textAlign="center" placeholder="00:00" />
    </DateWithText>
  );
};

DateWithText.defaultProps = defaultProps;

export default dateWithText;
