import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import ChangeAccountbookColorCard from '@molecules/ChangeAccountbookColorCard';

interface Props {
  labelColor: string;
}

const CreateAccountbookSetting: React.FC<Props> = ({ labelColor }: Props) => {
  return (
    <ColumnFlexContainer margin="1rem 0 2rem">
      <ChangeAccountbookColorCard labelColor={labelColor} />
    </ColumnFlexContainer>
  );
};

export default CreateAccountbookSetting;
