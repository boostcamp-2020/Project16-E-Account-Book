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
  margin-bottom: 24px;
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
          <Input placeholder="내용은 최대 15자까지 입력가능합니다" width="100%" />
        </InputDiv>
        <InputWithText title="금액" width="100%" />
        <DateWithText title="날짜" width="100%" />
        <DateWithText title="시간" width="100%" />
        <MenuWithText options={categories} title="카테고리" width="100%" />
        <MenuWithText options={payments} title="결제수단" width="100%" />
      </InputContainer>
    </ColumnFlexContainer>
  );
};

export default transactionForm;
