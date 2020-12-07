import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftLargeText from '@atoms/p/LeftLargeText';
import TextArea from '@atoms/textarea/TextArea';
import SquircleCard from '@atoms/div/SquircleCard';
import RoundShortButton from '@atoms/button/RoundShortButton';
import colorUtils from '@utils/color';

interface Props {
  backgroundColor: string;
}

const CreateAccountbookFormBox: React.FC<Props> = ({ backgroundColor }: Props) => {
  const fontColor = colorUtils.getFontColor(backgroundColor);
  const buttonColor = fontColor === 'white' ? 'black' : 'white';
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
          <RoundShortButton border="none" backgroundColor={buttonColor} color={fontColor}>
            생성
          </RoundShortButton>
        </RowFlexContainer>
        <RowFlexContainer width="100%" justifyContent="baseline">
          <LeftLargeText color={fontColor}>이름을 입력해주세요.</LeftLargeText>
        </RowFlexContainer>
        <TextArea width="100%" height="30%" />
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default CreateAccountbookFormBox;
