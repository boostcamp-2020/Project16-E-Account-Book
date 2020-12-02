import React from 'react';
import styled from 'styled-components';
import SquircleCard from '@atoms/div/SquircleCard';
import UserImages from '@molecules/UserImages';
import CardInfo from '@molecules/CardInfo';
import CardNumberText from '@molecules/CardNumberText';

interface Props {
  links: string[];
  title: string;
  description: string;
  fontSize: string;
  inMoney: number;
  exMoney: number;
  backgroundColor?: string;
}

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

const socialAccountBook: React.FC<Props> = ({
  links,
  title,
  description,
  fontSize,
  inMoney,
  exMoney,
  backgroundColor,
}: Props) => {
  return (
    <SquircleCard backgroundColor={backgroundColor}>
      <LeftBox>
        <UserImages links={links} />
      </LeftBox>
      <CenterBox>
        <CardInfo title={title} description={description} />
      </CenterBox>
      <RightBox>
        <CardNumberText fontSize={fontSize} inMoney={inMoney} exMoney={exMoney} />
      </RightBox>
    </SquircleCard>
  );
};

export default socialAccountBook;
