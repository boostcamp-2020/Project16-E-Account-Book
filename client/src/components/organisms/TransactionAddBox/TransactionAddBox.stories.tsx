import React from 'react';
import TransactionAddBox from './TransactionAddBox';

export default {
  title: 'Organisms/TransactionAddBox',
  component: TransactionAddBox,
};

export const transactionAddBox = (): JSX.Element => {
  const onClick = () => {
    return true;
  };
  return (
    <TransactionAddBox
      categorys={['군것질', '교통비', '회식비']}
      payments={['카카오페이', '현금']}
      onClick={onClick}
      width="290px"
      height="500px"
    />
  );
};

transactionAddBox.story = {
  name: 'TransactionAddBox',
};
