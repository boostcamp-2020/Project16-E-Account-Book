import React from 'react';
import styled from 'styled-components';
import UserImage from '@atoms/img/UserImage';
import UpSentence from '@atoms/p/LeftNormalText';
import DownSentence from '@atoms/p/LeftSmallText';
import NavButton from '@atoms/button/NavButton';
import SmallText from '@atoms/p/CenterSmallText';
import IncomeText from '@atoms/p/IncomeText';
import ExpenditureText from '@atoms/p/ExpenditureText';

const SocialAccountBook = styled.div`
  display: flex;
  justify-content: space-around;
  width: 600px;
  height: 120px;
  border: 1px solid red;
  background-color: yellow;
`;

const LeftBox = styled.div`
  flex: 6;
  border: 1px solid green;
`;

const CenterBox = styled.div`
  flex: 10;
  border: 1px solid blue;
`;

const RightBox = styled.div`
  flex: 6;
  height: 100%;
  border: 1px solid black;
`;

const Income = styled.div`
  display: flex;
  height: 20%;
  border: 1px solid pink;
`;
const Expenditure = styled.div`
  display: flex;
  height: 20%;
  border: 1px solid pink;
`;

const NavbuttonContainer = styled.div`
  flex: 1;
  border: 1px solid red;
`;

const socialAccountBook: React.FC = () => {
  const link =
    'https://camo.githubusercontent.com/80afeacc15fc9527cacd6a8257613bcc97967d63947bbb8e2f6efe0a2ed8d59d/68747470733a2f2f692e696d6775722e636f6d2f536c7568554c712e6a7067';
  return (
    <SocialAccountBook>
      <LeftBox>
        <UserImage link={link} />
      </LeftBox>
      <CenterBox>
        <UpSentence>부스트 캠프</UpSentence>
        <DownSentence>부스트 캠프 동아리 가계부</DownSentence>
      </CenterBox>
      <RightBox>
        <Income>
          <SmallText>수입</SmallText>
          <IncomeText fontWeight="bold" fontSize="15px" color="blue" money={31242} />
        </Income>
        <Expenditure>
          <SmallText>지출</SmallText>
          <ExpenditureText fontWeight="bold" fontSize="15px" color="red" money={12342} />
        </Expenditure>
      </RightBox>
      <NavbuttonContainer>
        <NavButton moveUrl="/" name="setting" iconColor="#7392FF" width="1rem" height="1rem" />
      </NavbuttonContainer>
    </SocialAccountBook>
  );
};

export default socialAccountBook;
