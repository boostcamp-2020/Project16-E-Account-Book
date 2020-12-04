import React from 'react';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import myColor from '@theme/color';
import ExpenditureText from '@atoms/p/ExpenditureText';
import IncomeText from '@atoms/p/IncomeText';

interface props {
  data: dataProps;
}

interface dataProps {
  expenditure: number;
  income: number;
}

const TransactionTotal: React.FC<props> = ({ data }: props) => {
  return (
    <RowFlexContainer
      width="100%"
      height="2rem"
      justifyContent="flex-end"
      alignItems="center"
      borderWidth="0px 0px 2px 0px"
      borderStyle="solid"
    >
      <ExpenditureText
        money={data.expenditure}
        fontSize="1rem"
        fontWeight="normal"
        color={myColor.primary.accent}
      />
      <RowFlexContainer width="10px" />
      <IncomeText
        money={data.income}
        fontSize="1rem"
        fontWeight="normal"
        color={myColor.primary.main}
      />
    </RowFlexContainer>
  );
};

export default TransactionTotal;
