import React from 'react';
import styled from 'styled-components';
import ToggleButton from '@atoms/div/ToggleButton';
import TextButton from '@atoms/button/TextButton';
import Input from '@atoms/input/Input';
import InputWithText from '@molecules/InputWithText';
import DateWithText from '@molecules/DateWithText';
import MenuWithText from '@molecules/MenuWithText';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';

interface Props {
  categories: string[];
  payments: string[];
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 240px;
  margin: 24px 0px;
`;

const DeleteButtonContainer = styled.div`
  margin-left: auto;
`;

const InputDiv = styled.div``;

const transactionForm: React.FC<Props> = ({ categories, payments, onClick }: Props) => {
  return (
    <ColumnFlexContainer width="100%" justifyContent="space-around">
      <RowFlexContainer width="100%">
        <ToggleButton leftButtonName="수입" rightButtonName="지출" onClick={onClick} />
        <DeleteButtonContainer>
          <TextButton>모두 지우기</TextButton>
        </DeleteButtonContainer>
      </RowFlexContainer>
      <InputContainer>
        <InputDiv>
          <Input fontSize="1.4rem" placeholder="최대 15자까지 입력가능합니다" width="100%" />
        </InputDiv>
        <InputWithText title="금액" width="100%" />
        <RowFlexContainer justifyContent="space-between">
          <DateWithText type="date" title="날짜" width="55%" />
          <DateWithText type="time" title="시간" width="45%" justifyContent="flex-end" />
        </RowFlexContainer>
        <MenuWithText options={categories} title="카테고리" width="100%" />
        <MenuWithText options={payments} title="결제수단" width="100%" />
      </InputContainer>
    </ColumnFlexContainer>
  );
};

export default transactionForm;
