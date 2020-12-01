import React, { useState } from 'react';
import Color from '@theme/color';
import CheckBox from './CheckBox';

export default {
  title: 'Atoms/checkbox',
  component: CheckBox,
  argTypes: {
    color: { control: 'color' },
    description: { control: 'text' },
  },
};

interface Props {
  color: string;
  description: string;
}

export const expenditureCheckBox = ({ ...args }: Props): JSX.Element => {
  const [check, setCheck] = useState(false);
  return <CheckBox checked={check} {...args} onClick={() => setCheck(!check)} />;
};

export const incomeCheckBox = ({ ...args }: Props): JSX.Element => {
  const [check, setCheck] = useState(false);
  return <CheckBox checked={check} {...args} onClick={() => setCheck(!check)} />;
};

expenditureCheckBox.story = {
  name: 'expenditureCheckBox',
};

expenditureCheckBox.args = {
  color: Color.money.expenditure,
  description: '지출',
};

incomeCheckBox.story = {
  name: 'incomeCheckBox',
};

incomeCheckBox.args = {
  color: Color.money.income,
  description: '수입',
};
