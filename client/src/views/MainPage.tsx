import React from 'react';
import queryParser from '@utils/queryParser';
import TopNavBar from '@organisms/TopNavBar';

import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import CenterContent from '@molecules/CenterContent';
import MyAccountInfoCard from '@organisms/MyAccountInfoCard';
import AccountBookBackground from '@atoms/div/AccountBookBackground';
import styled from 'styled-components';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import CreateButton from '@atoms/button/CreateButton';
import LeftNormalText from '@atoms/p/LeftNormalText';
import LeftLargeText from '@atoms/p/LeftLargeText';

interface props {
  location: any;
}

const MainPage: React.FC<props> = ({ location }: props) => {
  if (location.search.length > 0) {
    const queryString = queryParser(location.search as string);
    document.cookie = `jwt=${queryString.get('jwt')}`;
  }
  interface chipsProps {
    categoryList: Array<string>;
    amountList: Array<number>;
    income: number;
    expend: number;
    link: string;
  }

  const chipsArgs: chipsProps = {
    categoryList: ['여가', '외식', '쇼핑', '교통'],
    amountList: [80000, 50000, 17500, 12980],
    income: 243943,
    expend: 467443,
    link:
      'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
  };

  const MarginBox = styled.div`
    width: 100%;
    height: 2rem;
  `;

  const PositionBox = styled.div`
    margin-top: 3rem;
    width: 90%;
  `;

  const CardBox = styled.div`
    width: 100%;
    margin-top: 6rem;
  `;
  const createAccountbook = () => {
    return true;
  };

  return (
    <>
      <CenterContent>
        <TopNavBar />
        <ColumFlexContainer width="100%" alignItems="center">
          <MarginBox />
          <AccountBookBackground height="250px">
            <ColumFlexContainer width="100%" height="100%" alignItems="center">
              <RowFlexContainer width="90%" alignItems="center" justifyContent="space-between">
                <LeftNormalText>안녕하세요 제구님!</LeftNormalText>
                <CreateButton onClick={createAccountbook} />
              </RowFlexContainer>
              <RowFlexContainer width="90%">
                <LeftLargeText>
                  이번 달은 식비 지출이 많네요 다음달엔 조금만 줄여보세요
                </LeftLargeText>
              </RowFlexContainer>
              <PositionBox>
                <MyAccountInfoCard {...chipsArgs} />
              </PositionBox>
            </ColumFlexContainer>
          </AccountBookBackground>
          <ColumFlexContainer width="90%">
            <CardBox>
              <MyAccountInfoCard {...chipsArgs} />
              <MyAccountInfoCard {...chipsArgs} />
              <MyAccountInfoCard {...chipsArgs} />
              <MyAccountInfoCard {...chipsArgs} />
            </CardBox>
          </ColumFlexContainer>
        </ColumFlexContainer>
      </CenterContent>
    </>
  );
};

export default MainPage;
