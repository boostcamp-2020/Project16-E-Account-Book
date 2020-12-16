import React from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import ColorLabel from '@atoms/div/ColorLabel';
import TextButton from '@atoms/button/TextButton';
import styled from 'styled-components';
import getRandomKey from '@utils/random';
import getColorList from '@theme/colorList';

interface Props {
  currentColor: string;
}

const ScrollDiv = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 90%;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  justify-content: flex-end;
`;

const CreateAccountbookColorModal: React.FC<Props> = ({ currentColor }: Props) => {
  const title = '색상 변경하기';

  const colorList = getColorList();

  colorList[0][0] = currentColor;

  return (
    <Modal title={title}>
      <ButtonDiv>
        <TextButton>확인</TextButton>
      </ButtonDiv>
      <ScrollDiv>
        <ColumnFlexContainer width="90%">
          {colorList.map((color) => {
            return (
              <RowFlexContainer
                key={getRandomKey()}
                justifyContent="space-between"
                margin="0 0 2rem 0"
              >
                {color.map((ele) => (
                  <ColorLabel key={getRandomKey()} backgroundColor={ele} />
                ))}
              </RowFlexContainer>
            );
          })}
        </ColumnFlexContainer>
      </ScrollDiv>
    </Modal>
  );
};

export default CreateAccountbookColorModal;
