import React from 'react';
import myColor from '@theme/color';
import Bold from '@atoms/span/BoldSpan';
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
import { initMonth } from '@actions/date/type';
import { PrivateBook } from '@interfaces/accountbook';
import Text from '@atoms/p/CenterNormalText';

interface Props {
  link: string;
  info: PrivateBook;
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
    localStorage.setItem('account_book_type', `PRIVATE`);
    localStorage.setItem('account_book_id', `0`);
    dispatch(setPrivate());
    dispatch(initMonth());
    history.push('/accountbook');
  };

  const checkCategoryValue = () => {
    if (info.category.length === 0) {
      return (
        <ColumnFlexContainer
          width="100%"
          justifyContent="space-evenly"
          align-items="center"
          margin="10px 0 0 0"
          height="60%"
        >
          <Text color={myColor.primary.white} fontSize="12px">
            이번 달 지출 내역이 없네요😥
          </Text>
          <Text color={myColor.primary.white} fontSize="14px">
            지출 내역을 추가해보세요
          </Text>
        </ColumnFlexContainer>
      );
    }
    return (
      <ColumnFlexContainer width="70%" height="100%" justifyContent="space-between">
        <LeftNormalText color="white">이번 달 소비 현황</LeftNormalText>
        <TwoByTwoChips data={info.category} />
      </ColumnFlexContainer>
    );
  };

  return (
    <SquircleCard {...squircleCardArgs}>
      <ColumnFlexContainer width="100%" height="100%">
        <RowFlexContainer
          justifyContent="space-between"
          width="100%"
          height="30%"
          alignContent="center"
        >
          <UserImage size="36px" link={link} />
          <LeftNormalText>
            <Bold color="white">내 가계부</Bold>
          </LeftNormalText>
          <SquircleShortButton onClick={toMyAccountBook}>조회하기</SquircleShortButton>
        </RowFlexContainer>
        <RowFlexContainer justifyContent="space-between" width="100%" height="70%">
          {checkCategoryValue()}
          <ColumnFlexContainer width="25%" height="100%">
            <CircleGraph size={6} income={info.income} expend={info.expenditure} />
          </ColumnFlexContainer>
        </RowFlexContainer>
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default MyAccountInfoCard;
