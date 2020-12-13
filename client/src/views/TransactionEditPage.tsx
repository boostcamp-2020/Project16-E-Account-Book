import React from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import TransactionForm from '@organisms/TransactionForm';
import EditTransactionMenu from '@organisms/EditTransactionMenu';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideModal } from '@actions/modal/type';

const Container = styled.div`
  margin: 40px 20px 0px;
`;

const TransactionPostPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  dispatch(hideModal());

  const cancel = () => {
    history.goBack();
  };
  const onClick = () => {
    return true;
  };
  return (
    <>
      <CenterContent>
        <TopNavBar />
        <Container>
          <TransactionForm />
          <EditTransactionMenu submit={onClick} remove={onClick} cancel={cancel} />
        </Container>
      </CenterContent>
    </>
  );
};

export default TransactionPostPage;
