import React from 'react';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import RoundShortChips from '@atoms/div/RoundShortChips';
import LeftNormalText from '@atoms/p/LeftNormalText';
import ntm from '@utils/numberToMoney';
import myColor from '@theme/color';
import ExpenditureText from '@atoms/p/ExpenditureText';
import IncomeText from '@atoms/p/IncomeText';

interface props {
  data: dataProps;
}

interface dataProps {
  category: string;
  title: string;
  amount: number;
  payment: any;
}

const TransactionInfo: React.FC<props> = ({ data }: props) => {
  return (
    <RowFlexContainer
      width="100%"
      height="2rem"
      justifyContent="space-between"
      alignItems="center"
      borderWidth="0px 0px 0.5px 0px"
      borderStyle="solid"
      padding="5px 0px 5px 0px"
    >
      <RowFlexContainer>
        <RoundShortChips
          backgroundColor={data.payment === null ? myColor.primary.main : myColor.primary.accent}
          margin="0px 10px 0px 0px"
        >
          {data.category}
        </RoundShortChips>

        <LeftNormalText>{data.title}</LeftNormalText>
      </RowFlexContainer>
      {data.payment === null ? (
        <IncomeText
          money={data.amount}
          fontSize="1rem"
          fontWeight="normal"
          color={myColor.primary.main}
        />
      ) : (
        <ExpenditureText
          money={data.amount}
          fontSize="1rem"
          fontWeight="normal"
          color={myColor.primary.accent}
        />
      )}
    </RowFlexContainer>
  );
};

export default TransactionInfo;
