import React, { useState } from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftLargeText from '@atoms/p/LeftLargeText';
import TextArea from '@atoms/textarea/TextArea';
import SquircleCard from '@atoms/div/SquircleCard';
import RoundShortButton from '@atoms/button/RoundShortButton';
import colorUtils from '@utils/color';
/* import * as Axios from '@utils/axios';
import * as API from '@utils/api'; */

interface Props {
  backgroundColor: string;
}

const CreateAccountbookFormBox: React.FC<Props> = ({ backgroundColor }: Props) => {
  const fontColor = colorUtils.getFontColor(backgroundColor);
  const buttonColor = fontColor === 'white' ? 'black' : 'white';

  const [name, setName] = useState('이름을 입력해주세요');
  const [description, setDescription] = useState();

  const nameChangeHandler = (event: any) => {
    setName(event.target.value);
  };

  const descriptionChangeHandler = (event: any) => {
    setDescription(event.target.value);
  };

  const createButtonClick = () => {
    console.log(name);
  };

  return (
    <SquircleCard width="100%" backgroundColor={backgroundColor} height="15rem">
      <ColumnFlexContainer
        width="100%"
        height="12rem"
        justifyContent="space-around"
        margin="2rem 1rem 0"
        alignItems="center"
      >
        <RowFlexContainer width="100%" justifyContent="space-between">
          <LeftLargeText color={fontColor} fontWeight="bold">
            가계부 생성
          </LeftLargeText>
          <RoundShortButton
            border="none"
            backgroundColor={buttonColor}
            color={fontColor}
            onClick={createButtonClick}
          >
            생성
          </RoundShortButton>
        </RowFlexContainer>
        <RowFlexContainer width="100%" justifyContent="baseline">
          <TextArea
            value={name}
            width="50%"
            height="100%"
            onChange={nameChangeHandler}
            fontColor={fontColor}
            fontSize="17pt"
            backgroundColor={backgroundColor}
          />
        </RowFlexContainer>
        <TextArea
          value={description}
          width="100%"
          height="30%"
          onChange={descriptionChangeHandler}
        />
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default CreateAccountbookFormBox;
