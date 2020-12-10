import React, { useState, useEffect } from 'react';
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
import Bold from '@atoms/span/BoldSpan';
import SocialAccountBook from '@organisms/SocialAccountBook';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { SocialBook, PrivateBook } from '@interfaces/accountbook';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';

interface chipsProps {
  link: string;
  info: any;
}

const MarginBox = styled.div`
  width: 100%;
  height: 2rem;
`;

const PositionBox = styled.div`
  margin-top: 0.3rem;
  width: 90%;
`;

const MasterBooksBox = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const SocialBooksBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const initPrivate = {
  category: [],
  income: '0',
  expenditure: '0',
};

const MainPage: React.FC = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  const userImage = useSelector((state: RootState) => state.user.image);

  const [privateBook, setPrivateBook] = useState<PrivateBook>(initPrivate);
  const [masterBooks, setMasterBooks] = useState<SocialBook[]>([]);
  const [socialBooks, setSocialBooks] = useState<SocialBook[]>([]);

  const chipsArgs: chipsProps = {
    link: userImage,
    info: privateBook,
  };

  const initMasterBooks = async () => {
    const master = await getAxiosData(API.GET_MASTER_BOOKS);
    setMasterBooks(master.data);
  };

  const initSocialBooks = async () => {
    const social = await getAxiosData(API.GET_SOCIAL_BOOKS);
    setSocialBooks(social.data);
  };

  const getAnalysis = async () => {
    const { data } = await getAxiosData(`${API.GET_PRIVATE_ANALYSIS}`);
    setPrivateBook(data);
  };

  useEffect(() => {
    initMasterBooks();
    initSocialBooks();
    getAnalysis();
  }, []);

  return (
    <>
      <CenterContent>
        <TopNavBar />
        <ColumFlexContainer width="100%" alignItems="center">
          <MarginBox />
          <AccountBookBackground height="230px">
            <ColumFlexContainer width="100%" height="100%" alignItems="center">
              <RowFlexContainer width="90%" alignItems="center" justifyContent="space-between">
                <LeftNormalText>
                  안녕하세요 <Bold>{userName}</Bold>님!
                </LeftNormalText>
                <CreateButton link="/accountbook/social/new" />
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
            <MasterBooksBox>
              {masterBooks.map((book) => {
                return <SocialAccountBook key={book.id} {...book} />;
              })}
            </MasterBooksBox>
            <SocialBooksBox>
              {socialBooks.map((book) => {
                return <SocialAccountBook key={book.id} {...book} />;
              })}
            </SocialBooksBox>
          </ColumFlexContainer>
        </ColumFlexContainer>
      </CenterContent>
    </>
  );
};

export default MainPage;
