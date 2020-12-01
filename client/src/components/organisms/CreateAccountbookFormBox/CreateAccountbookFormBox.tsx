import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import TextArea from '@atoms/textarea/TextArea';
import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const FormBoxContainer = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
`;

const CreateAccountbokoFormBox: React.FC<Props> = ({ backgroundColor }: Props) => {
  return (
    <FormBoxContainer backgroundColor={backgroundColor}>
      <ColumnFlexContainer margin="2rem 0 0 0">
        <RowFlexContainer>가계부 생성, 버튼</RowFlexContainer>
        <LeftNormalText>이름을 입력해주세요.</LeftNormalText>
        <TextArea width="100%" height="100%" />
      </ColumnFlexContainer>
    </FormBoxContainer>
  );
};

CreateAccountbokoFormBox.defaultProps = defaultProps;

export default CreateAccountbokoFormBox;
