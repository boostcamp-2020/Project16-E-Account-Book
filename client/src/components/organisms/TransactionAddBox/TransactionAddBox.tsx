import React from 'react';
import styled from 'styled-components';
import ToggleButton from '@atoms/div/ToggleButton';
import TextButton from '@atoms/button/TextButton';
import Input from '@atoms/input/Input';
import InputWithText from '@molecules/InputWithText';
import DateWithText from '@molecules/DateWithText';
import MenuWithText from '@molecules/MenuWithText';
import RoundLongButton from '@atoms/button/RoundLongButton';
import myColor from '@theme/color';
import FlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props extends sizeProps {
  categorys: string[];
  payments: string[];
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface sizeProps {
  width?: string;
  height?: string;
}

const defaultProps = {
  width: '290px',
  height: '500px',
};

const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
`;

const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 13%;
`;

const InputDiv = styled.div``;

const transactionAddBox: React.FC<Props> = ({
  width,
  height,
  categorys,
  payments,
  onClick,
}: Props) => {
  return (
    <FlexContainer width={width} height={height} justifyContent="space-around">
      <TopDiv>
        <ToggleButton leftButtonName="수입" rightButtonName="지출" onClick={onClick} />
        <TextButton>모두 지우기</TextButton>
      </TopDiv>
      <MiddleDiv>
        <InputDiv>
          <Input placeholder="내용은 최대 15자까지 입력가능합니다" width="100%" />
        </InputDiv>
        <InputWithText title="금액" width="100%" />
        <DateWithText title="날짜" width="100%" />
        <DateWithText title="시간" width="100%" />
        <MenuWithText options={categorys} title="카테고리" width="100%" />
        <MenuWithText options={payments} title="결제수단" width="100%" />
      </MiddleDiv>
      <BottomDiv>
        <RoundLongButton>등록</RoundLongButton>
        <RoundLongButton backgroundColor={myColor.primary.cancel}>취소</RoundLongButton>
      </BottomDiv>
    </FlexContainer>
  );
};

FlexContainer.defaultProps = defaultProps;

export default transactionAddBox;
