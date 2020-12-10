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

const socialAccountBook: React.FC<SocialBook> = ({
  id,
  name,
  description,
  color,
  incomeSum,
  expenditureSum,
  images,
}: SocialBook) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const toSocialAccountBook = () => {
    dispatch(setSocial(id));
    dispatch(initMonth());
    history.push('/accountbook');
  };

  return (
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
  );
};

export default socialAccountBook;
