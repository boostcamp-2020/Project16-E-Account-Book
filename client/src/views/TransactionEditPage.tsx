import React, { useState } from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import TransactionForm from '@organisms/TransactionForm';
import EditTransactionMenu from '@organisms/EditTransactionMenu';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '@actions/modal/type';
import { inputToNumber } from '@utils/number';
import { RootState } from '@reducers/rootReducer';
import { putAxios, deleteAxios } from '@utils/axios';
import * as API from '@utils/api';

// eslint-disable-next-line no-shadow
enum Form {
  Title = 3,
  Amount = 4,
  Day = 5,
  Time = 6,
  CategoryId = 7,
  PaymentId = 8,
  IsIncome = 9,
  Id = 10,
}

const Container = styled.div`
  margin: 40px 20px 0px;
`;

const TransactionPostPage: React.FC = () => {
  const accountbookType = useSelector((state: RootState) => state.accountbook.type);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const history = useHistory();
  const dispatch = useDispatch();
  const [method, setMethod] = useState('edit');
  dispatch(hideModal());

  const cancel = () => {
    history.goBack();
  };
  const removeHandler = () => {
    setMethod('remove');
  };
  const putTransaction = async (data) => {
    switch (accountbookType) {
      case 'PRIVATE':
        await putAxios(API.PUT_PRIVATE_TRANSACTION, data);
        break;
      case 'SOCIAL':
        await putAxios(API.POST_SOCIAL_TRANSACTION, data);
        break;
      default:
        break;
    }
    history.goBack();
  };

  const deleteTransaction = async (id) => {
    console.log(id);
    switch (accountbookType) {
      case 'PRIVATE':
        await deleteAxios(API.DELETE_PRIVATE_TRANSACTION(id));
        break;
      case 'SOCIAL':
        await deleteAxios(API.DELETE_SOCIAL_TRANSACTION(id));
        break;
      default:
        break;
    }
    history.goBack();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target[Form.Title].value;
    const id = event.target[Form.Id].value;
    const amount = inputToNumber(event.target[Form.Amount].value);
    const day = event.target[Form.Day].value;
    const time = `${event.target[Form.Time].value}:00`;
    const date = `${day} ${time}`;
    const categoryId = event.target[Form.CategoryId].value;
    const isIncome = Boolean(Number(event.target[Form.IsIncome].value));
    const paymentId = isIncome ? undefined : event.target[Form.PaymentId].value;
    const data = {
      id,
      accountbookId,
      title,
      amount,
      date,
      categoryId,
      paymentId,
    };

    switch (method) {
      case 'edit':
        putTransaction(data);
        break;
      case 'remove':
        deleteTransaction(id);
        break;
      default:
    }
  };

  return (
    <>
      <CenterContent>
        <TopNavBar />
        <Container>
          <form onSubmit={submitHandler}>
            <TransactionForm />
            <EditTransactionMenu remove={removeHandler} cancel={cancel} />
          </form>
        </Container>
      </CenterContent>
    </>
  );
};

export default TransactionPostPage;
