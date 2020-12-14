import React from 'react';
// import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import ChangeAccountbookColorCard from '@molecules/ChangeAccountbookColorCard';

interface Props {
  labelColor: string;
}

const CreateAccountbookSetting: React.FC<Props> = ({ labelColor }: Props) => {
  return (
    <ColumnFlexContainer margin="2rem 0 1rem 0">
      <ChangeAccountbookColorCard labelColor={labelColor} />
    </ColumnFlexContainer>
  );
};

export default CreateAccountbookSetting;
