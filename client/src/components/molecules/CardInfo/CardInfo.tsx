import React from 'react';
import styled from 'styled-components';
import Bold from '@atoms/span/BoldSpan';
import UpSentence from '@atoms/p/LeftNormalText';
import DownSentence from '@atoms/p/LeftSmallText';

interface Props {
  title: string;
  description: string;
}

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const cardInfo: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <CardInfo>
      <UpSentence>
        <Bold>{title}</Bold>
      </UpSentence>
      <DownSentence>{description}</DownSentence>
    </CardInfo>
  );
};

export default cardInfo;
