import React from 'react';
import styled from 'styled-components';
import SquircleCard from '@atoms/div/SquircleCard';
import UserImages from '@molecules/UserImages';
import CardInfo from '@molecules/CardInfo';
import CardNumberText from '@molecules/CardNumberText';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSocial } from '@actions/accountbook/type';
import { initMonth } from '@actions/date/type';
import { SocialBook } from '@interfaces/accountbook';
import NavButton from '@atoms/button/NavButton';
import myColor from '@theme/color';

const Container = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100%;
  cursor: pointer;
  padding: 0px;
`;

const LeftBox = styled.div`
  display: flex;
  flex: 1.8;
  align-items: center;
`;

const CenterBox = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;

const RightBox = styled.div`
  display: flex;
  flex: 1.6;
  align-items: center;
`;

const defaultProps = {
  isMaster: false,
};

const socialAccountBook: React.FC<SocialBook> = ({
  id,
  name,
  description,
  color,
  incomeSum,
  expenditureSum,
  images,
  isMaster,
}: SocialBook) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const toSocialAccountBook = () => {
    localStorage.setItem('account_book_type', `SOCIAL`);
    localStorage.setItem('account_book_id', `${id}`);
    dispatch(setSocial(id));
    dispatch(initMonth());
    history.push('/accountbook');
  };
  const moveUrl = `/social/edit/:${id}`;
  return (
    <>
      <Container onClick={toSocialAccountBook}>
        <SquircleCard backgroundColor={color} height="90px">
          <LeftBox>
            <UserImages links={images} />
          </LeftBox>
          <CenterBox>
            <CardInfo title={name} description={description} />
          </CenterBox>
          <RightBox>
            <CardNumberText
              fontSize="0.6rem"
              inMoney={Number(incomeSum)}
              exMoney={Number(expenditureSum)}
            />
          </RightBox>
        </SquircleCard>
      </Container>
      {isMaster && (
        <>
          <NavButton
            moveUrl={moveUrl}
            name="setting"
            width="20%"
            height="20%"
            iconColor={myColor.primary.black}
          />
        </>
      )}
    </>
  );
};

socialAccountBook.defaultProps = defaultProps;

export default socialAccountBook;
