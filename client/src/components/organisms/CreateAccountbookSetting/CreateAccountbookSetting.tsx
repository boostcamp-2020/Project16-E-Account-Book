import React from 'react';
// import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import InviteAccountbookCard from '@molecules/InviteAccountbookCard';
import ChangeAccountbookColorCard from '@molecules/ChangeAccountbookColorCard';

interface Props {
  links: string[];
  labelColor: string;
}

const CreateAccountbookSetting: React.FC<Props> = ({ links, labelColor }: Props) => {
  return (
    <ColumnFlexContainer margin="2rem 0 1rem 0">
      <InviteAccountbookCard links={links} />
      <ChangeAccountbookColorCard labelColor={labelColor} />
    </ColumnFlexContainer>
  );
};

export default CreateAccountbookSetting;
