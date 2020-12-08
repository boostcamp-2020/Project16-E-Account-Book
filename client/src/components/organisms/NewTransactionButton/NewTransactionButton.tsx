import React from 'react';
import styled from 'styled-components';
import CreateButton from '@atoms/button/CreateButton';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FloatRightBottomContainer = styled.div`
  position: absolute;
  right: 1.6em;
  bottom: 1.6em;
`;

const NewTransactionButton: React.FC = () => {
  const link = '/accountbook/transaction/new';
  return (
    <Container>
      <FloatRightBottomContainer>
        <CreateButton link={link} />
      </FloatRightBottomContainer>
    </Container>
  );
};

export default NewTransactionButton;
