import React from 'react';
import styled from 'styled-components';
import CreateButton from '@atoms/button/CreateButton';

const FloatRightBottomContainer = styled.div`
  position: fixed;
  right: 1.6em;
  bottom: 1.6em;
`;

const NewTransactionButton: React.FC = () => {
  const link = '/accountbook/transaction/new';
  return (
    <>
      <FloatRightBottomContainer>
        <CreateButton link={link} />
      </FloatRightBottomContainer>
    </>
  );
};

export default NewTransactionButton;
