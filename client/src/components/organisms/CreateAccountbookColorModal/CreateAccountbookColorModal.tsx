import React, { useState, useEffect } from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import ColorLabel from '@atoms/div/ColorLabel';
import TextButton from '@atoms/button/TextButton';
import styled from 'styled-components';
import { getRandomKey } from '@utils/random';
import getColorList from '@theme/colorList';
import colorUtils from '@utils/color';
import ColorLabelWithCheck from '@molecules/ColorLabelWithCheck';

interface Props {
  buttonEvent: (data) => any;
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

const CreateAccountbookColorModal: React.FC<Props> = ({ buttonEvent, currentColor }: Props) => {
  const title = '색상 변경하기';

  const colorList = getColorList();

  let nowColor = currentColor;

  const [curIndex, setCurIndex] = useState(colorUtils.getIndexinList(currentColor, colorList));

  useEffect(() => {
    nowColor = colorList[curIndex[0]][curIndex[1]];
  }, [curIndex]);

  const selectColor = (color) => {
    setCurIndex(colorUtils.getIndexinList(color, colorList));
  };

  return (
    <Modal title={title}>
      <ButtonDiv>
        <TextButton
          onClick={() => {
            buttonEvent(nowColor);
          }}
        >
          확인
        </TextButton>
      </ButtonDiv>
      <ScrollDiv>
        <ColumnFlexContainer width="100%">
          {colorList.map((color) => {
            return (
              <RowFlexContainer
                key={getRandomKey()}
                justifyContent="space-between"
                margin="0 0 2rem 0"
              >
                {color.map((ele) => {
                  if (
                    JSON.stringify(colorUtils.getIndexinList(ele, colorList)) ===
                    JSON.stringify(curIndex)
                  ) {
                    return (
                      <ColorLabelWithCheck
                        buttonEvent={selectColor}
                        key={getRandomKey()}
                        backgroundColor={ele}
                      />
                    );
                  }
                  return (
                    <ColorLabel
                      buttonEvent={selectColor}
                      key={getRandomKey()}
                      backgroundColor={ele}
                    />
                  );
                })}
              </RowFlexContainer>
            );
          })}
        </ColumnFlexContainer>
      </ScrollDiv>
    </Modal>
  );
};

export default CreateAccountbookColorModal;
