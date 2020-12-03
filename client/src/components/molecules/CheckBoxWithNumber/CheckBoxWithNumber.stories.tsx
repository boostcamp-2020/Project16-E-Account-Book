import React, { useState } from 'react';
import Color from '@theme/color';
import CheckBoxWithNumber from './CheckBoxWithNumber';

export default {
  title: 'Molecules/CheckBoxWithNumber',
  component: CheckBoxWithNumber,
};

export const checkBoxWithNumber = (): JSX.Element => {
  const [check, setCheck] = useState(false);
  const fontWeight = 'bold';
  const fontSize = '15px';
  const money = 12600;
  return (
    <CheckBoxWithNumber
      checked={check}
      color={Color.money.income}
      description="수입"
      onClick={() => setCheck(!check)}
      fontWeight={fontWeight}
      fontSize={fontSize}
      money={money}
    />
  );
};

checkBoxWithNumber.story = {
  name: 'CheckBoxWithNumber',
};
