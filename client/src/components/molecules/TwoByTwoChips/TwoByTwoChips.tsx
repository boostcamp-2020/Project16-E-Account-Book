import React from 'react';
import myColor from '@theme/color';
import styled from 'styled-components';
import { numberToMoney } from '@utils/number';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import SquircleShortChips from '@atoms/div/SquircleShortChips';

interface props {
  categoryList: Array<string>;
  amountList: Array<number>;
}

const ChipsContainer = styled.div`
  width: 50%;
  padding: 3px;
  box-sizing: border-box;
`;

const TwoByTwoChips: React.FC<props> = ({ categoryList, amountList }: props) => {
  return (
    <RowFlexContainer width="100%" height="100%" flexWrap="wrap">
      <ChipsContainer>
        <SquircleShortChips width="100%" backgroundColor={myColor.primary.white}>
          {`${categoryList[0]} ${numberToMoney(amountList[0])}`}
        </SquircleShortChips>
      </ChipsContainer>
      <ChipsContainer>
        <SquircleShortChips width="100%" backgroundColor={myColor.primary.white}>
          {`${categoryList[1]} ${numberToMoney(amountList[1])}`}
        </SquircleShortChips>
      </ChipsContainer>
      <ChipsContainer>
        <SquircleShortChips width="100%" backgroundColor={myColor.primary.white}>
          {`${categoryList[2]} ${numberToMoney(amountList[2])}`}
        </SquircleShortChips>
      </ChipsContainer>
      <ChipsContainer>
        <SquircleShortChips width="100%" backgroundColor={myColor.primary.white}>
          {`${categoryList[3]} ${numberToMoney(amountList[3])}`}
        </SquircleShortChips>
      </ChipsContainer>
    </RowFlexContainer>
  );
};

export default TwoByTwoChips;
