import React from 'react';
// import styled from 'styled-components';
import myColor from '@theme/color';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import InviteAccountbookCard from '@molecules/InviteAccountbookCard';
import ChangeAccountbookColorCard from '@molecules/ChangeAccountbookColorCard';

interface Props {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const CreateAccountbookSetting: React.FC<Props> = () => {
  return (
    <ColumnFlexContainer margin="2rem 0 0 0 ">
      <InviteAccountbookCard />
      <ChangeAccountbookColorCard />
    </ColumnFlexContainer>
  );
};

CreateAccountbookSetting.defaultProps = defaultProps;

export default CreateAccountbookSetting;
