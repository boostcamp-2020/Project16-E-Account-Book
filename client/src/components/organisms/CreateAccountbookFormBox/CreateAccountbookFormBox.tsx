import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import TextArea from '@atoms/textarea/TextArea';
import myColor from '@theme/color';
import SquircleCard from '@atoms/div/SquircleCard';

interface Props {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const CreateAccountbookFormBox: React.FC<Props> = ({ backgroundColor }: Props) => {
  return (
    <SquircleCard width="100%" backgroundColor={backgroundColor} height="25rem">
      <ColumnFlexContainer
        width="100%"
        height="100%"
        justifyContent="space-around"
        margin="2rem 0 0 0"
      >
        <RowFlexContainer>가계부 생성, 버튼</RowFlexContainer>
        <LeftNormalText>이름을 입력해주세요.</LeftNormalText>
        <TextArea width="80%" height="30%" />
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

CreateAccountbookFormBox.defaultProps = defaultProps;

export default CreateAccountbookFormBox;
