import React from 'react';
import Button from '@atoms/button/RoundShortButton';
import RowFlexContainer from './RowFlexContainer';

interface Props {
  justifyContent: string;
  alignContent: string;
  alignItems: string;
}

export default {
  title: 'Atoms/div/RowFlexContainer',
  component: RowFlexContainer,
  argTypes: {
    justifyContent: { control: 'text' },
    alignContent: { control: 'text' },
    alignItems: { control: 'text' },
  },
};

export const rowFlexContainer = ({ ...args }: Props): JSX.Element => {
  return (
    <RowFlexContainer {...args}>
      <Button>예시1</Button>
      <Button>예시2</Button>
    </RowFlexContainer>
  );
};

rowFlexContainer.story = {
  name: 'RowFlexContainer',
};

rowFlexContainer.args = {
  justifyContent: 'flex-start',
  alignContent: 'stretch',
  alignItems: 'center',
};
