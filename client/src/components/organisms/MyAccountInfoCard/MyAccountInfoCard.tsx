import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import SquircleCard from '@atoms/div/SquircleCard';
import UserImage from '@atoms/img/UserImage';
import CardInfo from '@molecules/CardInfo';
import CardNumberText from '@molecules/CardNumberText';
import TwoByTwoChips from '@molecules/TwoByTwoChips';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import SquircleShortButton from '@atoms/button/SquircleShortButton';
import CircleGraph from '@atoms/graph/CircleGraph';

interface Props {
  categoryList: Array<string>;
  amountList: Array<number>;
  income: number;
  expend: number;
  link: string;
}

interface squircleCardProps {
  width: string;
  height: string;
  backgroundColor: string;
  flexFlow: string;
}

const squircleCardArgs: squircleCardProps = {
  width: '100%',
  height: '10rem',
  backgroundColor: myColor.primary.black,
  flexFlow: 'column',
};

const MyAccountInfoCard: React.FC<Props> = ({
  categoryList,
  amountList,
  income,
  expend,
  link,
}: Props) => {
  return (
    <SquircleCard {...squircleCardArgs}>
      <ColumnFlexContainer width="100%" height="100%">
        <RowFlexContainer justifyContent="space-between" width="100%" height="30%">
          <UserImage size="36px" link={link} />
          <LeftNormalText color="white">내 가계부</LeftNormalText>
          <SquircleShortButton>조회하기</SquircleShortButton>
        </RowFlexContainer>
        <RowFlexContainer justifyContent="space-between" width="100%" height="70%">
          <ColumnFlexContainer width="70%" height="100%">
            <LeftNormalText color="white">이번 달 소비 현황</LeftNormalText>
            <TwoByTwoChips categoryList={categoryList} amountList={amountList} />
          </ColumnFlexContainer>
          <ColumnFlexContainer width="30%" height="100%">
            <CircleGraph size="6" income={income} expend={expend} />
          </ColumnFlexContainer>
        </RowFlexContainer>
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default MyAccountInfoCard;
