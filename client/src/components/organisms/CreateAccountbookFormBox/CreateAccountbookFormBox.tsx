import React, { useState } from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftLargeText from '@atoms/p/LeftLargeText';
import TextArea from '@atoms/textarea/TextArea';
import SquircleCard from '@atoms/div/SquircleCard';
import RoundShortButton from '@atoms/button/RoundShortButton';
import colorUtils from '@utils/color';

interface Props {
  name: string;
  description: string;
  role: string;
  backgroundColor: string;
  buttonEvent: (name, description) => any;
}

const CreateAccountbookFormBox: React.FC<Props> = ({
  name: initName,
  description: initDescription,
  role,
  buttonEvent,
  backgroundColor,
}: Props) => {
  const fontColor = colorUtils.getFontColor(backgroundColor);
  const buttonColor = fontColor === 'white' ? 'black' : 'white';
  const title = `가계부 ${role}`;

  const [name, setName] = useState<string>(initName);
  const [description, setDescription] = useState<string>(initDescription);
  const nameChangeHandler = (event: any) => {
    setName(event.target.value);
  };

  const descriptionChangeHandler = (event: any) => {
    setDescription(event.target.value);
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
            {title}
          </LeftLargeText>
          <RoundShortButton
            border="none"
            backgroundColor={buttonColor}
            color={fontColor}
            onClick={() => buttonEvent(name, description)}
          >
            {role}
          </RoundShortButton>
        </RowFlexContainer>
        <RowFlexContainer width="100%" justifyContent="baseline">
          <TextArea
            value={name}
            width="100%"
            height="100%"
            onChange={nameChangeHandler}
            fontColor={fontColor}
            fontSize="17pt"
            backgroundColor={backgroundColor}
            placeholder="이름을 입력해주세요."
          />
        </RowFlexContainer>
        <TextArea
          value={description}
          width="100%"
          height="30%"
          onChange={descriptionChangeHandler}
          placeholder="가계부에 대한 설명을 써주세요."
        />
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default CreateAccountbookFormBox;
