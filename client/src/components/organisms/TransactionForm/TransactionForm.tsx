import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

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

const transactionForm: React.FC<Props> = ({ onClick }: Props) => {
  const income = useSelector((state: RootState) => state.category.income);
  const expenditure = useSelector((state: RootState) => state.category.expenditure);
  const payment = useSelector((state: RootState) => state.payment.payment);

  const [isIncome, setIsIncome] = useState(true);
  const [isExpenditure, setIsExpenditure] = useState(false);

  const [title, setTitle] = useState<string>();
  const [amount, setAmount] = useState<string>();

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

  return (
    <ColumnFlexContainer width="100%" justifyContent="space-around">
      <RowFlexContainer width="100%" alignItems="center">
        <ToggleButton
          leftButtonName="수입"
          rightButtonName="지출"
          leftCallback={setIsIncome}
          rightCallback={setIsExpenditure}
          onClick={onClick}
        />
        <DeleteButtonContainer>
          <TextButton>모두 지우기</TextButton>
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
          <DateWithText type="date" title="날짜" width="55%" />
          <DateWithText type="time" title="시간" width="45%" justifyContent="flex-end" />
        </RowFlexContainer>
        {isIncome && <MenuWithText options={income} title="카테고리" width="100%" />}
        {isExpenditure && <MenuWithText options={expenditure} title="카테고리" width="100%" />}
        <MenuWithText options={payment} title="결제수단" width="100%" />
      </InputContainer>
    </ColumnFlexContainer>
  );
};

export default transactionForm;
