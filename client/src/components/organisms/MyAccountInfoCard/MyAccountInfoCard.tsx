import React from 'react';
import myColor from '@theme/color';
import SquircleCard from '@atoms/div/SquircleCard';
import UserImage from '@atoms/img/UserImage';
import TwoByTwoChips from '@molecules/TwoByTwoChips';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import SquircleShortButton from '@atoms/button/SquircleShortButton';
import CircleGraph from '@atoms/graph/CircleGraph';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPrivate } from '@actions/accountbook/type';

interface Props {
  link: string;
  info: any;
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

const MyAccountInfoCard: React.FC<Props> = ({ link, info }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const toMyAccountBook = () => {
    dispatch(setPrivate());
    history.push('/accountbook');
  };
  console.log(info);
  const categoryList = ['a', 'b', 'c'];
  const amountList = [1, 2, 3];
  const income = 123;
  const expend = 60;
  return (
    <SquircleCard {...squircleCardArgs}>
      <ColumnFlexContainer width="100%" height="100%">
        <RowFlexContainer justifyContent="space-between" width="100%" height="30%">
          <UserImage size="36px" link={link} />
          <LeftNormalText color="white">내 가계부</LeftNormalText>
          <SquircleShortButton onClick={toMyAccountBook}>조회하기</SquircleShortButton>
        </RowFlexContainer>
        <RowFlexContainer justifyContent="space-between" width="100%" height="70%">
          <ColumnFlexContainer width="70%" height="100%">
            <LeftNormalText color="white">이번 달 소비 현황</LeftNormalText>
            <TwoByTwoChips categoryList={categoryList} amountList={amountList} />
          </ColumnFlexContainer>
          <ColumnFlexContainer width="30%" height="100%">
            <CircleGraph size={6} income={income} expend={expend} />
          </ColumnFlexContainer>
        </RowFlexContainer>
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default MyAccountInfoCard;
