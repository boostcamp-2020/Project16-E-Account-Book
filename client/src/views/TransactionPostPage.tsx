import React from 'react';
import styled from 'styled-components';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import CreateTransactionHeader from '@organisms/CreateTransactionHeader';
import TransactionForm from '@organisms/TransactionForm';
import CreateTransactionMenu from '@organisms/CreateTransactionMenu';
import { inputToNumber } from '@utils/number';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const cancel = () => {
    history.go(-1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target[Form.Title].value;
    const amount = inputToNumber(event.target[Form.Amount].value);
    const day = event.target[Form.Day].value;
    const time = `${event.target[Form.Time].value}:00`;
    const date = day + time;
    const categoryId = event.target[Form.CategoryId].value;
    const paymentId = event.target[Form.PaymentId].value;
    const isIncome = Boolean(Number(event.target[Form.IsIncome].value));
    console.log(title, amount, date, categoryId, paymentId, isIncome);
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
