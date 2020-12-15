import React from 'react';
import styled from 'styled-components';
import RoundLongButton from '@atoms/button/RoundLongButton';
import myColor from '@theme/color';

interface Props {
  remove: () => void;
  cancel: () => void;
}

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  margin: 0px -20px;
`;

const editTransactionMenu: React.FC<Props> = ({ remove, cancel }: Props) => {
  return (
    <BottomDiv>
      <RoundLongButton isSubmit>등록</RoundLongButton>
      <RoundLongButton isSubmit onClick={remove} backgroundColor={myColor.primary.reject}>
        삭제
      </RoundLongButton>
      <RoundLongButton onClick={cancel} backgroundColor={myColor.primary.cancel}>
        취소
      </RoundLongButton>
    </BottomDiv>
  );
};

export default editTransactionMenu;
