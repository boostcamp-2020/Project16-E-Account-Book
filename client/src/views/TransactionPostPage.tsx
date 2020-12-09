import React from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import CreateTransactionHeader from '@organisms/CreateTransactionHeader';
import TransactionForm from '@organisms/TransactionForm';
import CreateTransactionMenu from '@organisms/CreateTransactionMenu';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  margin: 40px 20px 0px;
`;

const TransactionPostPage: React.FC = () => {
  const history = useHistory();
  const cancel = () => {
    history.go(-1);
  };
  const onClick = () => {
    return true;
  };

  return (
    <>
      <CenterContent>
        <TopNavBar />
        <Container>
          <form onSubmit={submitHandler}>
            <CreateTransactionHeader />
            <TransactionForm />
            <CreateTransactionMenu cancel={cancel} />
          </form>
        </Container>
      </CenterContent>
    </>
  );
};

export default TransactionPostPage;
