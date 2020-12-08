import React from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import CreateTransactionHeader from '@organisms/CreateTransactionHeader';
import TransactionForm from '@organisms/TransactionForm';
import CreateTransactionMenu from '@organisms/CreateTransactionMenu';

const Container = styled.div`
  margin: 40px 20px 0px;
`;

const TransactionPostPage: React.FC = () => {
  const onClick = () => {
    return true;
  };

  return (
    <>
      <CenterContent>
        <TopNavBar />
        <Container>
          <CreateTransactionHeader />
          <TransactionForm onClick={onClick} />
          <CreateTransactionMenu submit={onClick} cancel={onClick} />
        </Container>
      </CenterContent>
    </>
  );
};

export default TransactionPostPage;
