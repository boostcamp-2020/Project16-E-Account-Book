import React from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import CreateTransactionHeader from '@organisms/CreateTransactionHeader';
import TransactionForm from '@organisms/TransactionForm';
import CreateTransactionMenu from '@organisms/CreateTransactionMenu';

const Container = styled.div`
  margin: 16px 20px 0px;
`;

const TransactionPostPage: React.FC = () => {
  const onClick = () => {
    return true;
  };

  return (
    <>
      <TopNavBar />
      <CenterContent>
        <Container>
          <CreateTransactionHeader />
          <TransactionForm
            categories={['군것질', '교통비', '회식비']}
            payments={['카카오페이', '현금']}
            onClick={onClick}
          />
          <CreateTransactionMenu submit={onClick} cancel={onClick} />
        </Container>
      </CenterContent>
    </>
  );
};

export default TransactionPostPage;
