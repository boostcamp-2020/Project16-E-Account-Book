import React from 'react';
import styled from 'styled-components';
import SquircleCard from '@atoms/div/SquircleCard';
import UserImages from '@molecules/UserImages';
import CardInfo from '@molecules/CardInfo';
import CardNumberText from '@molecules/CardNumberText';
import { SocialBook } from '@interfaces/accountbook';

const LeftBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 1em;
`;

const CenterBox = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;

const RightBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const socialAccountBook: React.FC<SocialBook> = ({
  name,
  description,
  color,
  incomeSum,
  expenditureSum,
  images,
}: SocialBook) => {
  return (
    <SquircleCard backgroundColor={color}>
      <LeftBox>
        <UserImages links={images} />
      </LeftBox>
      <CenterBox>
        <CardInfo title={name} description={description} />
      </CenterBox>
      <RightBox>
        <CardNumberText
          fontSize="1rem"
          inMoney={Number(incomeSum)}
          exMoney={Number(expenditureSum)}
        />
      </RightBox>
    </SquircleCard>
  );
};

export default socialAccountBook;
