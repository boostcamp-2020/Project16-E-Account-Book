import React from 'react';
import styled from 'styled-components';
import SmallText from '@atoms/p/CenterSmallText';
import IncomeText from '@atoms/p/IncomeText';
import ExpenditureText from '@atoms/p/ExpenditureText';

interface Props {
  fontSize: string;
  inMoney: number;
  exMoney: number;
}

const CardNumberText = styled.div`
  width: 100%;
`;

const Income = styled.div`
  display: flex;
`;
const Expenditure = styled.div`
  display: flex;
`;
const cardNumberText: React.FC<Props> = ({ fontSize, inMoney, exMoney }: Props) => {
  return (
    <CardNumberText>
      <Income>
        <SmallText fontSize={fontSize}>수입</SmallText>
        <IncomeText fontWeight="bold" fontSize={fontSize} color="red" money={inMoney} />
      </Income>
      <Expenditure>
        <SmallText fontSize={fontSize}>지출</SmallText>
        <ExpenditureText fontWeight="bold" fontSize={fontSize} color="blue" money={exMoney} />
      </Expenditure>
    </CardNumberText>
  );
};

export default cardNumberText;
