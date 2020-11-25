import React, { useState } from 'react';
import Color from '@theme/color';
import CheckBox from './CheckBox';

export default {
  title: 'Atoms/Checkbox',
  component: CheckBox,
};

export const expenditureCheckBox = () => {
  const [check, setCheck] = useState(false);
  const color = Color.money.expenditure;
  const description = '지출';
  return (
    <CheckBox
      checked={check}
      color={color}
      description={description}
      onClick={() => setCheck(!check)}
    />
  );
};

export const incomeCheckBox = () => {
  const [check, setCheck] = useState(false);
  const color = Color.money.income;
  const description = '수입';
  return (
    <CheckBox
      checked={check}
      color={color}
      description={description}
      onClick={() => setCheck(!check)}
    />
  );
};

expenditureCheckBox.story = {
  name: 'expenditureCheckBox',
};

incomeCheckBox.story = {
  name: 'incomeCheckBox',
};
