import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleButton from '@atoms/div/ToggleButton';
import TextButton from '@atoms/button/TextButton';
import Input from '@atoms/input/Input';
import InputWithText from '@molecules/InputWithText';
import DateWithText from '@molecules/DateWithText';
import MenuWithText from '@molecules/MenuWithText';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import { inputToNumber, numberToMoney } from '@utils/number';
import { getDate, getTime } from '@utils/date';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { postData } from '@interfaces/transaction';
import SmsParsingModal from '@organisms/SmsParsingModal';
import { useHistory } from 'react-router-dom';

interface Props {
  initData?: postData | undefined;
}

const defaultProps = {
  initData: undefined,
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  margin: 24px 0px;
`;

const DeleteButtonContainer = styled.div`
  margin-left: auto;
`;

const InputDiv = styled.div``;

const transactionForm: React.FC<Props> = ({ initData }: Props) => {
  const income = useSelector((state: RootState) => state.category.income);
  const expenditure = useSelector((state: RootState) => state.category.expenditure);
  const payment = useSelector((state: RootState) => state.payment.payment);
  const modalView = useSelector((state: RootState) => state.modal.view);
  const [isIncome, setIsIncome] = useState(false);
  const [id, setId] = useState(-1);

  const currDate = new Date();
  const history = useHistory();

  const [title, setTitle] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [categoryId, setCategoryId] = useState<number | string>();
  const [paymentId, setPaymentId] = useState<number | string>();
  const [parsedData, setParsedData] = useState({
    cardName: undefined,
    amount: undefined,
    date: undefined,
    time: undefined,
  });

  const titleInputChange = (e) => {
    const input = e.target.value;
    if (input.length > 15) {
      alert('내용은 최대 15자까지만 입력 가능합니다!');
      return;
    }
    setTitle(input);
  };

  const amountInputChange = (e) => {
    const input = inputToNumber(e.target.value);
    const money = numberToMoney(input);
    setAmount(money);
  };

  const inputChange = (e, callback) => {
    const input = e.target.value;
    callback(input);
  };

  const clearInput = () => {
    setTitle('');
    setAmount('');
    setDate('');
    setTime('');
    setCategoryId('');
    setPaymentId('');
  };

  useEffect(() => {
    if (initData !== undefined) {
      // TODO : 수입 지출에 따른 토글 버튼 변화
      const initAmount = numberToMoney(initData.amount);
      const initDate = getDate(initData.date);
      const initTime = getTime(initData.date);
      const initPayment = initData.paymentId;
      setTitle(initData.title);
      setAmount(initAmount);
      setDate(initDate);
      setTime(initTime);
      setCategoryId(initData.categoryId);
      if (initPayment) {
        setPaymentId(initPayment);
      }
    }
    if (history.location.state !== undefined) {
      const { state }: any = history.location;
      setTitle(state.title);
      setAmount(numberToMoney(state.amount));
      setDate(getDate(state.date));
      setTime(getTime(state.date));
      setId(state.id);

      if (!state.payment) {
        setIsIncome(true); // bug here
        payment.forEach((pay) => {
          if (pay.name === state.payment) {
            setPaymentId(pay.id);
          }
        });
      }

      income.forEach((category) => {
        if (category.name === state.category) {
          setCategoryId(category.id);
        }
      });
      expenditure.forEach((category) => {
        if (category.name === state.category) {
          setCategoryId(category.id);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (parsedData.amount !== undefined) {
      const amountNumber = Number(parsedData.amount);
      setAmount(numberToMoney(amountNumber));
    }

    if (parsedData.time !== undefined) setTime(parsedData.time);
    if (parsedData.date !== undefined) setDate(`${currDate.getFullYear()}-${parsedData.date}`);
    if (parsedData.cardName !== undefined) {
      payment.forEach((el) => {
        if (el.name === parsedData.cardName) setPaymentId(el.id);
      });
    }
  }, [parsedData]);

  return (
    <>
      {modalView === 'sms' && <SmsParsingModal setData={setParsedData} />}
      <ColumnFlexContainer width="100%" justifyContent="space-around">
        <RowFlexContainer width="100%" alignItems="center">
          <ToggleButton
            leftButtonName="수입"
            rightButtonName="지출"
            setIsIncome={setIsIncome}
            isIncome={isIncome}
          />
          <DeleteButtonContainer>
            <TextButton onClick={clearInput}>모두 지우기</TextButton>
          </DeleteButtonContainer>
        </RowFlexContainer>
        <InputContainer>
          <InputDiv>
            <Input
              fontSize="1.4rem"
              placeholder="최대 15자까지 입력가능합니다"
              width="100%"
              value={title}
              onChange={titleInputChange}
            />
          </InputDiv>
          <InputWithText title="금액" width="100%" value={amount} onChange={amountInputChange} />
          <RowFlexContainer justifyContent="space-between">
            <DateWithText
              type="date"
              title="날짜"
              width="55%"
              value={date}
              onChange={(e) => inputChange(e, setDate)}
            />
            <DateWithText
              type="time"
              title="시간"
              width="45%"
              justifyContent="flex-end"
              value={time}
              onChange={(e) => inputChange(e, setTime)}
            />
          </RowFlexContainer>
          {isIncome && (
            <MenuWithText
              options={income}
              title="카테고리"
              width="100%"
              value={categoryId}
              onChange={(e) => inputChange(e, setCategoryId)}
            />
          )}
          {!isIncome && (
            <MenuWithText
              options={expenditure}
              title="카테고리"
              width="100%"
              value={categoryId}
              onChange={(e) => inputChange(e, setCategoryId)}
            />
          )}
          <MenuWithText
            options={payment}
            title="결제수단"
            width="100%"
            value={paymentId}
            onChange={(e) => inputChange(e, setPaymentId)}
            isIncome={isIncome}
          />
          <input readOnly value={Number(isIncome)} hidden />
          <input name="id" value={Number(id)} hidden />
        </InputContainer>
      </ColumnFlexContainer>
    </>
  );
};

transactionForm.defaultProps = defaultProps;

export default transactionForm;
