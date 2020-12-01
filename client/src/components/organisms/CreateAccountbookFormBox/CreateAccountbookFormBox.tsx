import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import LeftLargeText from '@atoms/p/LeftLargeText';
import TextArea from '@atoms/textarea/TextArea';
import myColor from '@theme/color';
import SquircleCard from '@atoms/div/SquircleCard';
import RoundShortButton from '@atoms/button/RoundShortButton';

interface Props {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const CreateAccountbookFormBox: React.FC<Props> = ({ backgroundColor }: Props) => {
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
          <LeftLargeText color="white" fontWeight="bold">
            가계부 생성
          </LeftLargeText>
          <RoundShortButton backgroundColor="black" color="white">
            검색
          </RoundShortButton>
        </RowFlexContainer>
        <RowFlexContainer width="100%" justifyContent="baseline">
          <LeftNormalText color="white">이름을 입력해주세요.</LeftNormalText>
        </RowFlexContainer>
        <TextArea width="100%" height="30%" />
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

CreateAccountbookFormBox.defaultProps = defaultProps;

export default CreateAccountbookFormBox;
