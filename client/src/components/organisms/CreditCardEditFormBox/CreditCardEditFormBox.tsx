import React, { useState } from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftSmallText from '@atoms/p/LeftSmallText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import Input from '@atoms/input/Input';

interface Props {
  buttonEvent: (data) => any;
}

const CreditCardEditFormBox: React.FC<Props> = ({ buttonEvent }: Props) => {
  const [name, setName] = useState('');

  const nameChangeHandler = (event: any) => {
    setName(event.target.value);
  };
  return (
    <ColumnFlexContainer width="100%" margin="0 0 2rem 0" alignItems="baseline">
      <LeftSmallText>결제 수단 이름</LeftSmallText>
      <RowFlexContainer width="100%" margin="2rem 0 0 0 " justifyContent="space-between">
        <Input width="70%" value={name} onChange={nameChangeHandler} />
        <RoundShortButton onClick={() => buttonEvent(name)}>등록</RoundShortButton>
      </RowFlexContainer>
    </ColumnFlexContainer>
  );
};

export default CreditCardEditFormBox;
