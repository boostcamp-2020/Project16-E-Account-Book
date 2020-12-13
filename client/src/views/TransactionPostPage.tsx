import React from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import CreateTransactionHeader from '@organisms/CreateTransactionHeader';
import TransactionForm from '@organisms/TransactionForm';
import CreateTransactionMenu from '@organisms/CreateTransactionMenu';
import { inputToNumber } from '@utils/number';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { postAxios } from '@utils/axios';
import * as API from '@utils/api';

// eslint-disable-next-line no-shadow
enum Form {
  Title = 5,
  Amount = 6,
  Day = 7,
  Time = 8,
  CategoryId = 9,
  PaymentId = 10,
  IsIncome = 11,
}

const Container = styled.div`
  margin: 40px 20px 0px;
`;

const TransactionPostPage: React.FC = () => {
  const accountbookType = useSelector((state: RootState) => state.accountbook.type);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const previous = useSelector((state: RootState) => state.previous.previous);
  const history = useHistory();
  const cancel = () => {
    console.log(previous);
    history.goBack();
  };

  const postTransaction = async (data) => {
    switch (accountbookType) {
      case 'PRIVATE':
        await postAxios(API.POST_PRIVATE_TRANSACTION, data);
        break;
      case 'SOCIAL':
        await postAxios(API.POST_SOCIAL_TRANSACTION, data);
        break;
      default:
        break;
    }
    history.goBack();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target[Form.Title].value;
    const amount = inputToNumber(event.target[Form.Amount].value);
    const day = event.target[Form.Day].value;
    const time = `${event.target[Form.Time].value}:00`;
    const date = `${day} ${time}`;
    const categoryId = event.target[Form.CategoryId].value;
    const isIncome = Boolean(Number(event.target[Form.IsIncome].value));
    const paymentId = isIncome ? undefined : event.target[Form.PaymentId].value;
    const data = {
      accountbookId,
      title,
      amount,
      date,
      categoryId,
      paymentId,
    };
    postTransaction(data);
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
