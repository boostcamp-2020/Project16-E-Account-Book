import React from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import ColorLabel from '@atoms/div/ColorLabel';
import TextButton from '@atoms/button/TextButton';
import styled from 'styled-components';
import getRandomKey from '@utils/random';

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

  const colorList = [
    [currentColor, '#FFBB00', '#ABF200', '#1DDB16'],
    ['#00D8FF', '#0054FF', '#5F00FF', '#FF00DD'],
    ['#FFA7A7', '#FAED7D', '#B7F0B1', '#B5B2FF'],
    ['#000000', '#D5D5D5', '#008299', '#D4F4FA'],
    ['#BDBDBD', '#C4B73B', '#670000', '#FFB4B4'],
    ['#EAEAEA', '#D1B2FF', '#FAF4C0', '#D3FFFF'],
    ['#FFFF6C', '#14899D', '#4B0CA5', '#845E00'],
  ];

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
