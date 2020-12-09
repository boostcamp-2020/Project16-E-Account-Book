import React from 'react';
import styled from 'styled-components';
import RoundLongButton from '@atoms/button/RoundLongButton';
import myColor from '@theme/color';

interface Props {
  submit: () => void;
  cancel: () => void;
}

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  margin: 0px -20px;
`;

const createTransactionMenu: React.FC<Props> = ({ submit, cancel }: Props) => {
  return (
    <BottomDiv>
      <RoundLongButton isSubmit onClick={submit}>
        등록
      </RoundLongButton>
      <RoundLongButton onClick={cancel} backgroundColor={myColor.primary.cancel}>
        취소
      </RoundLongButton>
    </BottomDiv>
  );
};

export default createTransactionMenu;
