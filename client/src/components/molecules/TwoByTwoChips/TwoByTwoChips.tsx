import React from 'react';
import myColor from '@theme/color';
import styled from 'styled-components';
import { numberToMoney } from '@utils/number';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import SquircleShortChips from '@atoms/div/SquircleShortChips';
import { CategorySum } from '@interfaces/accountbook';

interface props {
  data: CategorySum[];
}

const ChipsContainer = styled.div`
  width: 50%;
  height: 40%;
  padding: 3px;
  box-sizing: border-box;
`;

const TwoByTwoChips: React.FC<props> = ({ data }: props) => {
  const chips = data.map((category) => {
    const { name } = category;
    const money = Number(category.money);
    return (
      <ChipsContainer key={name}>
        <SquircleShortChips width="100%" backgroundColor={myColor.primary.white}>
          {`${name}  ${numberToMoney(money)}`}
        </SquircleShortChips>
      </ChipsContainer>
    );
  });

  return (
    <RowFlexContainer width="100%" height="60%" flexWrap="wrap">
      {chips}
    </RowFlexContainer>
  );
};

export default TwoByTwoChips;
