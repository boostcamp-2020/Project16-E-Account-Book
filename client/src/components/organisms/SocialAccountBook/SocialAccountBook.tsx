import React from 'react';
import styled from 'styled-components';
import SocialContainer from '@atoms/div/SocialContainer';
import SocialImages from '@molecules/SocialImages';
import SocialInfo from '@molecules/SocialInfo';
import SocialMoney from '@molecules/SocialMoney';

interface Props {
  links: string[];
  title: string;
  description: string;
  fontSize: string;
  inMoney: number;
  exMoney: number;
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
}: Props) => {
  return (
    <SocialContainer>
      <LeftBox>
        <SocialImages links={links} />
      </LeftBox>
      <CenterBox>
        <SocialInfo title={title} description={description} />
      </CenterBox>
      <RightBox>
        <SocialMoney fontSize={fontSize} inMoney={inMoney} exMoney={exMoney} />
      </RightBox>
    </SocialContainer>
  );
};

export default socialAccountBook;
