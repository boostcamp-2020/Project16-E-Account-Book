import React from 'react';
import Button from '@atoms/button/RoundShortButton';
import ColumnFlexContainer from './ColumnFlexContainer';

interface Props {
  justifyContent: string;
  alignContent: string;
  alignItems: string;
}

export default {
  title: 'Atoms/div/ColumnFlexContainer',
  component: ColumnFlexContainer,
  argTypes: {
    justifyContent: { control: 'text' },
    alignContent: { control: 'text' },
    alignItems: { control: 'text' },
  },
};

export const columnFlexContainer = ({ ...args }: Props): JSX.Element => {
  return (
    <ColumnFlexContainer {...args}>
      <Button>예시1</Button>
      <Button>예시2</Button>
    </ColumnFlexContainer>
  );
};

columnFlexContainer.story = {
  name: 'ColumnFlexContainer',
};

columnFlexContainer.args = {
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'center',
};
